import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dmp")
export default class DmpController {
  @operation({
    summary: "Get Dmp",
  })
  @get()
  static getDmp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dmp",
  })
  @post("{id}")
  static createDmp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
