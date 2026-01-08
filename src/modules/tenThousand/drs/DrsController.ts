import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("drs")
export default class DrsController {
  @operation({
    summary: "Get Drs",
  })
  @get()
  static getDrs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Drs",
  })
  @post("{id}")
  static createDrs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
