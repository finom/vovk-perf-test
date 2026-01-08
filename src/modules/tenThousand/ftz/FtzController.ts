import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ftz")
export default class FtzController {
  @operation({
    summary: "Get Ftz",
  })
  @get()
  static getFtz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ftz",
  })
  @post("{id}")
  static createFtz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
