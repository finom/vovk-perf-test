import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gfj")
export default class GfjController {
  @operation({
    summary: "Get Gfj",
  })
  @get()
  static getGfj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gfj",
  })
  @post("{id}")
  static createGfj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
