import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jof")
export default class JofController {
  @operation({
    summary: "Get Jof",
  })
  @get()
  static getJof = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jof",
  })
  @post("{id}")
  static createJof = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
