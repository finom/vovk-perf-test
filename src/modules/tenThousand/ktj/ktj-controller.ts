import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ktj")
export default class KtjController {
  @operation({
    summary: "Get Ktj",
  })
  @get()
  static getKtj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ktj",
  })
  @post("{id}")
  static createKtj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
