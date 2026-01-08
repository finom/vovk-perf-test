import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("by")
export default class ByController {
  @operation({
    summary: "Get By",
  })
  @get()
  static getBy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create By",
  })
  @post("{id}")
  static createBy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
