import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gow")
export default class GowController {
  @operation({
    summary: "Get Gow",
  })
  @get()
  static getGow = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gow",
  })
  @post("{id}")
  static createGow = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
