import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("do")
export default class DoController {
  @operation({
    summary: "Get Do",
  })
  @get()
  static getDo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Do",
  })
  @post("{id}")
  static createDo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
