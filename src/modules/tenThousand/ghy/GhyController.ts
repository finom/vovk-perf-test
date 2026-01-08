import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ghy")
export default class GhyController {
  @operation({
    summary: "Get Ghy",
  })
  @get()
  static getGhy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ghy",
  })
  @post("{id}")
  static createGhy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
