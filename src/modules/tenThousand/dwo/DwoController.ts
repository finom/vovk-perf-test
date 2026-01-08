import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dwo")
export default class DwoController {
  @operation({
    summary: "Get Dwo",
  })
  @get()
  static getDwo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwo",
  })
  @post("{id}")
  static createDwo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
