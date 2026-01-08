import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fsj")
export default class FsjController {
  @operation({
    summary: "Get Fsj",
  })
  @get()
  static getFsj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fsj",
  })
  @post("{id}")
  static createFsj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
