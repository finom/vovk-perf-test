import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bwy")
export default class BwyController {
  @operation({
    summary: "Get Bwy",
  })
  @get()
  static getBwy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwy",
  })
  @post("{id}")
  static createBwy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
