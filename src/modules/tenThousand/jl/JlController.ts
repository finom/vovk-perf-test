import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jl")
export default class JlController {
  @operation({
    summary: "Get Jl",
  })
  @get()
  static getJl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jl",
  })
  @post("{id}")
  static createJl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
