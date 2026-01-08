import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gzg")
export default class GzgController {
  @operation({
    summary: "Get Gzg",
  })
  @get()
  static getGzg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gzg",
  })
  @post("{id}")
  static createGzg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
