import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lfk")
export default class LfkController {
  @operation({
    summary: "Get Lfk",
  })
  @get()
  static getLfk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfk",
  })
  @post("{id}")
  static createLfk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
