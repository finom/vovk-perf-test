import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lgx")
export default class LgxController {
  @operation({
    summary: "Get Lgx",
  })
  @get()
  static getLgx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgx",
  })
  @post("{id}")
  static createLgx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
