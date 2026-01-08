import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fsw")
export default class FswController {
  @operation({
    summary: "Get Fsw",
  })
  @get()
  static getFsw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fsw",
  })
  @post("{id}")
  static createFsw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
