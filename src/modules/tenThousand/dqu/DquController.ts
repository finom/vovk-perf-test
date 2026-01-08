import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dqu")
export default class DquController {
  @operation({
    summary: "Get Dqu",
  })
  @get()
  static getDqu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqu",
  })
  @post("{id}")
  static createDqu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
