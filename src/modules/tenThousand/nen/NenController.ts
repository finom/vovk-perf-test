import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nen")
export default class NenController {
  @operation({
    summary: "Get Nen",
  })
  @get()
  static getNen = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nen",
  })
  @post("{id}")
  static createNen = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
