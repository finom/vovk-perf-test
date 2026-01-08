import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dbl")
export default class DblController {
  @operation({
    summary: "Get Dbl",
  })
  @get()
  static getDbl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dbl",
  })
  @post("{id}")
  static createDbl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
