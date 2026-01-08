import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gpm")
export default class GpmController {
  @operation({
    summary: "Get Gpm",
  })
  @get()
  static getGpm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpm",
  })
  @post("{id}")
  static createGpm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
