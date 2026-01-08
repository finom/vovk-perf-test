import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kfx")
export default class KfxController {
  @operation({
    summary: "Get Kfx",
  })
  @get()
  static getKfx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfx",
  })
  @post("{id}")
  static createKfx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
