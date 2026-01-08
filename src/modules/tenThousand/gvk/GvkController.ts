import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gvk")
export default class GvkController {
  @operation({
    summary: "Get Gvk",
  })
  @get()
  static getGvk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gvk",
  })
  @post("{id}")
  static createGvk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
