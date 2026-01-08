import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fcy")
export default class FcyController {
  @operation({
    summary: "Get Fcy",
  })
  @get()
  static getFcy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fcy",
  })
  @post("{id}")
  static createFcy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
