import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gcj")
export default class GcjController {
  @operation({
    summary: "Get Gcj",
  })
  @get()
  static getGcj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gcj",
  })
  @post("{id}")
  static createGcj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
