import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gzs")
export default class GzsController {
  @operation({
    summary: "Get Gzs",
  })
  @get()
  static getGzs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gzs",
  })
  @post("{id}")
  static createGzs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
