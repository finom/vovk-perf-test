import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("art")
export default class ArtController {
  @operation({
    summary: "Get Art",
  })
  @get()
  static getArt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Art",
  })
  @post("{id}")
  static createArt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
