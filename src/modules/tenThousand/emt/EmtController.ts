import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("emt")
export default class EmtController {
  @operation({
    summary: "Get Emt",
  })
  @get()
  static getEmt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Emt",
  })
  @post("{id}")
  static createEmt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
