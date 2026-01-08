import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lrz")
export default class LrzController {
  @operation({
    summary: "Get Lrz",
  })
  @get()
  static getLrz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lrz",
  })
  @post("{id}")
  static createLrz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
