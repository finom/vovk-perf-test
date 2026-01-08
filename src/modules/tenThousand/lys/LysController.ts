import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lys")
export default class LysController {
  @operation({
    summary: "Get Lys",
  })
  @get()
  static getLys = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lys",
  })
  @post("{id}")
  static createLys = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
