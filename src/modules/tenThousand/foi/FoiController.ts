import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("foi")
export default class FoiController {
  @operation({
    summary: "Get Foi",
  })
  @get()
  static getFoi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Foi",
  })
  @post("{id}")
  static createFoi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
