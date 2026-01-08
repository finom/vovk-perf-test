import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cgz")
export default class CgzController {
  @operation({
    summary: "Get Cgz",
  })
  @get()
  static getCgz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgz",
  })
  @post("{id}")
  static createCgz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
