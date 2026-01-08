import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dlt")
export default class DltController {
  @operation({
    summary: "Get Dlt",
  })
  @get()
  static getDlt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dlt",
  })
  @post("{id}")
  static createDlt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
