import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gvr")
export default class GvrController {
  @operation({
    summary: "Get Gvr",
  })
  @get()
  static getGvr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gvr",
  })
  @post("{id}")
  static createGvr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
