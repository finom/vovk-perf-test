import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("neq")
export default class NeqController {
  @operation({
    summary: "Get Neq",
  })
  @get()
  static getNeq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Neq",
  })
  @post("{id}")
  static createNeq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
