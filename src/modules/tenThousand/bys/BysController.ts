import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bys")
export default class BysController {
  @operation({
    summary: "Get Bys",
  })
  @get()
  static getBys = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bys",
  })
  @post("{id}")
  static createBys = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
