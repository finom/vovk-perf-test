import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ath")
export default class AthController {
  @operation({
    summary: "Get Ath",
  })
  @get()
  static getAth = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ath",
  })
  @post("{id}")
  static createAth = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
