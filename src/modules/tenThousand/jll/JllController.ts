import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jll")
export default class JllController {
  @operation({
    summary: "Get Jll",
  })
  @get()
  static getJll = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jll",
  })
  @post("{id}")
  static createJll = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
