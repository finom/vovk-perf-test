import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mug")
export default class MugController {
  @operation({
    summary: "Get Mug",
  })
  @get()
  static getMug = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mug",
  })
  @post("{id}")
  static createMug = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
