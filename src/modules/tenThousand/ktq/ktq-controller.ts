import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ktq")
export default class KtqController {
  @operation({
    summary: "Get Ktq",
  })
  @get()
  static getKtq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ktq",
  })
  @post("{id}")
  static createKtq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
