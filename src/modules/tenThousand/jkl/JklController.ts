import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jkl")
export default class JklController {
  @operation({
    summary: "Get Jkl",
  })
  @get()
  static getJkl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jkl",
  })
  @post("{id}")
  static createJkl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
