import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("and")
export default class AndController {
  @operation({
    summary: "Get And",
  })
  @get()
  static getAnd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create And",
  })
  @post("{id}")
  static createAnd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
