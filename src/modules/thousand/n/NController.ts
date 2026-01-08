import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("n")
export default class NController {
  @operation({
    summary: "Get N",
  })
  @get()
  static getN = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create N",
  })
  @post("{id}")
  static createN = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
