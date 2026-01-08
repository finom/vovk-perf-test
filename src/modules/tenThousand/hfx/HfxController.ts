import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hfx")
export default class HfxController {
  @operation({
    summary: "Get Hfx",
  })
  @get()
  static getHfx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfx",
  })
  @post("{id}")
  static createHfx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
