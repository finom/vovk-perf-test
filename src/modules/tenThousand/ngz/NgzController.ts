import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ngz")
export default class NgzController {
  @operation({
    summary: "Get Ngz",
  })
  @get()
  static getNgz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngz",
  })
  @post("{id}")
  static createNgz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
