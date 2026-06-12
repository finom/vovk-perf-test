import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ktm")
export default class KtmController {
  @operation({
    summary: "Get Ktm",
  })
  @get()
  static getKtm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ktm",
  })
  @post("{id}")
  static createKtm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
