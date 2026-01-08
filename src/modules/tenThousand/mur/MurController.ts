import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mur")
export default class MurController {
  @operation({
    summary: "Get Mur",
  })
  @get()
  static getMur = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mur",
  })
  @post("{id}")
  static createMur = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
