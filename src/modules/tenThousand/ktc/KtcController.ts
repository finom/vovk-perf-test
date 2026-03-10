import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ktc")
export default class KtcController {
  @operation({
    summary: "Get Ktc",
  })
  @get()
  static getKtc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ktc",
  })
  @post("{id}")
  static createKtc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
