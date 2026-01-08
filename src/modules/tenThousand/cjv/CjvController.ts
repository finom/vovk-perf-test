import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cjv")
export default class CjvController {
  @operation({
    summary: "Get Cjv",
  })
  @get()
  static getCjv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cjv",
  })
  @post("{id}")
  static createCjv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
