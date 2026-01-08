import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dub")
export default class DubController {
  @operation({
    summary: "Get Dub",
  })
  @get()
  static getDub = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dub",
  })
  @post("{id}")
  static createDub = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
