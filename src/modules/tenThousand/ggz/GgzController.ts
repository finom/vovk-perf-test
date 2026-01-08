import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ggz")
export default class GgzController {
  @operation({
    summary: "Get Ggz",
  })
  @get()
  static getGgz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggz",
  })
  @post("{id}")
  static createGgz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
