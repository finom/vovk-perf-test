import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("meq")
export default class MeqController {
  @operation({
    summary: "Get Meq",
  })
  @get()
  static getMeq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Meq",
  })
  @post("{id}")
  static createMeq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
