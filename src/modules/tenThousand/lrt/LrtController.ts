import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lrt")
export default class LrtController {
  @operation({
    summary: "Get Lrt",
  })
  @get()
  static getLrt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lrt",
  })
  @post("{id}")
  static createLrt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
