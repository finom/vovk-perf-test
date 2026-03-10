import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hji")
export default class HjiController {
  @operation({
    summary: "Get Hji",
  })
  @get()
  static getHji = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hji",
  })
  @post("{id}")
  static createHji = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
