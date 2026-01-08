import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gvj")
export default class GvjController {
  @operation({
    summary: "Get Gvj",
  })
  @get()
  static getGvj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gvj",
  })
  @post("{id}")
  static createGvj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
