import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ddw")
export default class DdwController {
  @operation({
    summary: "Get Ddw",
  })
  @get()
  static getDdw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ddw",
  })
  @post("{id}")
  static createDdw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
