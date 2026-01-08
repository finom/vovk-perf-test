import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dnt")
export default class DntController {
  @operation({
    summary: "Get Dnt",
  })
  @get()
  static getDnt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dnt",
  })
  @post("{id}")
  static createDnt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
