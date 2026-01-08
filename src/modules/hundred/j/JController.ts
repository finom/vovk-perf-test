import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("j")
export default class JController {
  @operation({
    summary: "Get J",
  })
  @get()
  static getJ = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create J",
  })
  @post("{id}")
  static createJ = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
