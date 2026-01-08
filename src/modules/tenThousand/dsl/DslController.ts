import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dsl")
export default class DslController {
  @operation({
    summary: "Get Dsl",
  })
  @get()
  static getDsl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dsl",
  })
  @post("{id}")
  static createDsl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
