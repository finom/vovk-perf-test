import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gcr")
export default class GcrController {
  @operation({
    summary: "Get Gcr",
  })
  @get()
  static getGcr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gcr",
  })
  @post("{id}")
  static createGcr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
