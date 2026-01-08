import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cjc")
export default class CjcController {
  @operation({
    summary: "Get Cjc",
  })
  @get()
  static getCjc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cjc",
  })
  @post("{id}")
  static createCjc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
