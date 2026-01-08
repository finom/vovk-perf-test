import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dgz")
export default class DgzController {
  @operation({
    summary: "Get Dgz",
  })
  @get()
  static getDgz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgz",
  })
  @post("{id}")
  static createDgz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
