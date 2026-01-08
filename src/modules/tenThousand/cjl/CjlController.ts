import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cjl")
export default class CjlController {
  @operation({
    summary: "Get Cjl",
  })
  @get()
  static getCjl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cjl",
  })
  @post("{id}")
  static createCjl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
