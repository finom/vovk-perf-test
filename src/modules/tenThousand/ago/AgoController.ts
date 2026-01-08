import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ago")
export default class AgoController {
  @operation({
    summary: "Get Ago",
  })
  @get()
  static getAgo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ago",
  })
  @post("{id}")
  static createAgo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
