import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aji")
export default class AjiController {
  @operation({
    summary: "Get Aji",
  })
  @get()
  static getAji = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aji",
  })
  @post("{id}")
  static createAji = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
