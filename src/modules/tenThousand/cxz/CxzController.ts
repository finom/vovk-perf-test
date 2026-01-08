import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cxz")
export default class CxzController {
  @operation({
    summary: "Get Cxz",
  })
  @get()
  static getCxz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cxz",
  })
  @post("{id}")
  static createCxz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
