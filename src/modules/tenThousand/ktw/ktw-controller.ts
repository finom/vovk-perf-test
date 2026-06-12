import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ktw")
export default class KtwController {
  @operation({
    summary: "Get Ktw",
  })
  @get()
  static getKtw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ktw",
  })
  @post("{id}")
  static createKtw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
