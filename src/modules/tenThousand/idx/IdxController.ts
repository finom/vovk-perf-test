import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("idx")
export default class IdxController {
  @operation({
    summary: "Get Idx",
  })
  @get()
  static getIdx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idx",
  })
  @post("{id}")
  static createIdx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
