import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fal")
export default class FalController {
  @operation({
    summary: "Get Fal",
  })
  @get()
  static getFal = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fal",
  })
  @post("{id}")
  static createFal = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
