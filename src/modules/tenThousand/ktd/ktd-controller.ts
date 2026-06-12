import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ktd")
export default class KtdController {
  @operation({
    summary: "Get Ktd",
  })
  @get()
  static getKtd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ktd",
  })
  @post("{id}")
  static createKtd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
