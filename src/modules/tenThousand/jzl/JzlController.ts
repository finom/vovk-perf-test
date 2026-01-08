import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jzl")
export default class JzlController {
  @operation({
    summary: "Get Jzl",
  })
  @get()
  static getJzl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jzl",
  })
  @post("{id}")
  static createJzl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
