import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kyc")
export default class KycController {
  @operation({
    summary: "Get Kyc",
  })
  @get()
  static getKyc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kyc",
  })
  @post("{id}")
  static createKyc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
