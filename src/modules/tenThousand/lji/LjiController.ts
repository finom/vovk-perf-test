import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lji")
export default class LjiController {
  @operation({
    summary: "Get Lji",
  })
  @get()
  static getLji = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lji",
  })
  @post("{id}")
  static createLji = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
