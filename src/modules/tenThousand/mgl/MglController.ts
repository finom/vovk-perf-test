import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mgl")
export default class MglController {
  @operation({
    summary: "Get Mgl",
  })
  @get()
  static getMgl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgl",
  })
  @post("{id}")
  static createMgl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
