import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hue")
export default class HueController {
  @operation({
    summary: "Get Hue",
  })
  @get()
  static getHue = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hue",
  })
  @post("{id}")
  static createHue = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
