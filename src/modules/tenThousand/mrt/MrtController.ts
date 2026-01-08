import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mrt")
export default class MrtController {
  @operation({
    summary: "Get Mrt",
  })
  @get()
  static getMrt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mrt",
  })
  @post("{id}")
  static createMrt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
