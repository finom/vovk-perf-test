import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dba")
export default class DbaController {
  @operation({
    summary: "Get Dba",
  })
  @get()
  static getDba = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dba",
  })
  @post("{id}")
  static createDba = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
