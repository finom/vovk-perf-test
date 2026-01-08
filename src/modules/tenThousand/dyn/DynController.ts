import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dyn")
export default class DynController {
  @operation({
    summary: "Get Dyn",
  })
  @get()
  static getDyn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dyn",
  })
  @post("{id}")
  static createDyn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
