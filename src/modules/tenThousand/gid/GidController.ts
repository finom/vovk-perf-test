import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gid")
export default class GidController {
  @operation({
    summary: "Get Gid",
  })
  @get()
  static getGid = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gid",
  })
  @post("{id}")
  static createGid = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
