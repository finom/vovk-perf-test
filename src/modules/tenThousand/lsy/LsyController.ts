import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lsy")
export default class LsyController {
  @operation({
    summary: "Get Lsy",
  })
  @get()
  static getLsy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lsy",
  })
  @post("{id}")
  static createLsy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
