import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("z")
export default class ZController {
  @operation({
    summary: "Get Z",
  })
  @get()
  static getZ = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Z",
  })
  @post("{id}")
  static createZ = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
