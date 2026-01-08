import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("arc")
export default class ArcController {
  @operation({
    summary: "Get Arc",
  })
  @get()
  static getArc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Arc",
  })
  @post("{id}")
  static createArc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
