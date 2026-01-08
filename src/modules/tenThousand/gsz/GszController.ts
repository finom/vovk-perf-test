import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gsz")
export default class GszController {
  @operation({
    summary: "Get Gsz",
  })
  @get()
  static getGsz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gsz",
  })
  @post("{id}")
  static createGsz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
