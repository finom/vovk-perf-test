import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fcs")
export default class FcsController {
  @operation({
    summary: "Get Fcs",
  })
  @get()
  static getFcs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fcs",
  })
  @post("{id}")
  static createFcs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
