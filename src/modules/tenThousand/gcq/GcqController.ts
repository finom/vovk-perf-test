import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gcq")
export default class GcqController {
  @operation({
    summary: "Get Gcq",
  })
  @get()
  static getGcq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gcq",
  })
  @post("{id}")
  static createGcq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
