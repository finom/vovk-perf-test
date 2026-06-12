import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("czs")
export default class CzsController {
  @operation({
    summary: "Get Czs",
  })
  @get()
  static getCzs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Czs",
  })
  @post("{id}")
  static createCzs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
