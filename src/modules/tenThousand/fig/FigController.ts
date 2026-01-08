import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fig")
export default class FigController {
  @operation({
    summary: "Get Fig",
  })
  @get()
  static getFig = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fig",
  })
  @post("{id}")
  static createFig = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
