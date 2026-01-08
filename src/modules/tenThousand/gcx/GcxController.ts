import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gcx")
export default class GcxController {
  @operation({
    summary: "Get Gcx",
  })
  @get()
  static getGcx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gcx",
  })
  @post("{id}")
  static createGcx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
