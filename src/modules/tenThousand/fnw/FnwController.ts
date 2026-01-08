import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fnw")
export default class FnwController {
  @operation({
    summary: "Get Fnw",
  })
  @get()
  static getFnw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fnw",
  })
  @post("{id}")
  static createFnw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
