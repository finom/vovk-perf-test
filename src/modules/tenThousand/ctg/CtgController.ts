import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ctg")
export default class CtgController {
  @operation({
    summary: "Get Ctg",
  })
  @get()
  static getCtg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ctg",
  })
  @post("{id}")
  static createCtg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
