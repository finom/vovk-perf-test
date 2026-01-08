import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("msy")
export default class MsyController {
  @operation({
    summary: "Get Msy",
  })
  @get()
  static getMsy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Msy",
  })
  @post("{id}")
  static createMsy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
