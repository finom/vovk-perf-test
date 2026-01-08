import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gpy")
export default class GpyController {
  @operation({
    summary: "Get Gpy",
  })
  @get()
  static getGpy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpy",
  })
  @post("{id}")
  static createGpy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
