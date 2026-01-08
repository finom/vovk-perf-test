import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gvh")
export default class GvhController {
  @operation({
    summary: "Get Gvh",
  })
  @get()
  static getGvh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gvh",
  })
  @post("{id}")
  static createGvh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
