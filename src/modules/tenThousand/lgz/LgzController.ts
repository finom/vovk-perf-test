import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lgz")
export default class LgzController {
  @operation({
    summary: "Get Lgz",
  })
  @get()
  static getLgz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgz",
  })
  @post("{id}")
  static createLgz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
