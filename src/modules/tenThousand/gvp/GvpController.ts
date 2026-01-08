import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gvp")
export default class GvpController {
  @operation({
    summary: "Get Gvp",
  })
  @get()
  static getGvp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gvp",
  })
  @post("{id}")
  static createGvp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
