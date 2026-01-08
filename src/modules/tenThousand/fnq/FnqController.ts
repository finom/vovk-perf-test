import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fnq")
export default class FnqController {
  @operation({
    summary: "Get Fnq",
  })
  @get()
  static getFnq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fnq",
  })
  @post("{id}")
  static createFnq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
