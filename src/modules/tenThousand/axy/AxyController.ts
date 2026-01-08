import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("axy")
export default class AxyController {
  @operation({
    summary: "Get Axy",
  })
  @get()
  static getAxy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axy",
  })
  @post("{id}")
  static createAxy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
