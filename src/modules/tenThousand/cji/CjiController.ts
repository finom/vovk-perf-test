import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cji")
export default class CjiController {
  @operation({
    summary: "Get Cji",
  })
  @get()
  static getCji = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cji",
  })
  @post("{id}")
  static createCji = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
