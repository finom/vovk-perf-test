import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hsl")
export default class HslController {
  @operation({
    summary: "Get Hsl",
  })
  @get()
  static getHsl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hsl",
  })
  @post("{id}")
  static createHsl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
