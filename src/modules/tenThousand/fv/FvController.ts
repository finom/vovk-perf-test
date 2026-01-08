import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fv")
export default class FvController {
  @operation({
    summary: "Get Fv",
  })
  @get()
  static getFv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fv",
  })
  @post("{id}")
  static createFv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
