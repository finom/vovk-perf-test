import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lzs")
export default class LzsController {
  @operation({
    summary: "Get Lzs",
  })
  @get()
  static getLzs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lzs",
  })
  @post("{id}")
  static createLzs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
