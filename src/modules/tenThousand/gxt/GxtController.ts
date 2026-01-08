import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gxt")
export default class GxtController {
  @operation({
    summary: "Get Gxt",
  })
  @get()
  static getGxt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxt",
  })
  @post("{id}")
  static createGxt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
