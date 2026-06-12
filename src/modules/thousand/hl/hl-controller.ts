import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hl")
export default class HlController {
  @operation({
    summary: "Get Hl",
  })
  @get()
  static getHl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hl",
  })
  @post("{id}")
  static createHl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
