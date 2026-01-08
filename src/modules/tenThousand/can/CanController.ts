import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("can")
export default class CanController {
  @operation({
    summary: "Get Can",
  })
  @get()
  static getCan = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Can",
  })
  @post("{id}")
  static createCan = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
