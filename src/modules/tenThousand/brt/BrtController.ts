import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("brt")
export default class BrtController {
  @operation({
    summary: "Get Brt",
  })
  @get()
  static getBrt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Brt",
  })
  @post("{id}")
  static createBrt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
