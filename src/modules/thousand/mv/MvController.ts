import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mv")
export default class MvController {
  @operation({
    summary: "Get Mv",
  })
  @get()
  static getMv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mv",
  })
  @post("{id}")
  static createMv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
