import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dun")
export default class DunController {
  @operation({
    summary: "Get Dun",
  })
  @get()
  static getDun = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dun",
  })
  @post("{id}")
  static createDun = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
