import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mji")
export default class MjiController {
  @operation({
    summary: "Get Mji",
  })
  @get()
  static getMji = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mji",
  })
  @post("{id}")
  static createMji = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
