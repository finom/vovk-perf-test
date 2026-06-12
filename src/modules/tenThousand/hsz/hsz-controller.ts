import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hsz")
export default class HszController {
  @operation({
    summary: "Get Hsz",
  })
  @get()
  static getHsz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hsz",
  })
  @post("{id}")
  static createHsz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
