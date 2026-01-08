import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cjx")
export default class CjxController {
  @operation({
    summary: "Get Cjx",
  })
  @get()
  static getCjx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cjx",
  })
  @post("{id}")
  static createCjx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
