import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("pd")
export default class PdController {
  @operation({
    summary: "Get Pd",
  })
  @get()
  static getPd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Pd",
  })
  @post("{id}")
  static createPd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
