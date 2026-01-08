import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gij")
export default class GijController {
  @operation({
    summary: "Get Gij",
  })
  @get()
  static getGij = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gij",
  })
  @post("{id}")
  static createGij = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
