import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gcz")
export default class GczController {
  @operation({
    summary: "Get Gcz",
  })
  @get()
  static getGcz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gcz",
  })
  @post("{id}")
  static createGcz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
