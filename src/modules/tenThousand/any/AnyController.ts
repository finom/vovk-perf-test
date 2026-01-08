import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("any")
export default class AnyController {
  @operation({
    summary: "Get Any",
  })
  @get()
  static getAny = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Any",
  })
  @post("{id}")
  static createAny = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
