import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fcd")
export default class FcdController {
  @operation({
    summary: "Get Fcd",
  })
  @get()
  static getFcd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fcd",
  })
  @post("{id}")
  static createFcd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
