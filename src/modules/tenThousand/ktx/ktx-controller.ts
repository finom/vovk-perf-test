import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ktx")
export default class KtxController {
  @operation({
    summary: "Get Ktx",
  })
  @get()
  static getKtx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ktx",
  })
  @post("{id}")
  static createKtx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
