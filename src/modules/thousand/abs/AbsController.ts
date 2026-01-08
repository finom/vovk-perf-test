import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("abs")
export default class AbsController {
  @operation({
    summary: "Get Abs",
  })
  @get()
  static getAbs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abs",
  })
  @post("{id}")
  static createAbs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
