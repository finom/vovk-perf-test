import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lef")
export default class LefController {
  @operation({
    summary: "Get Lef",
  })
  @get()
  static getLef = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lef",
  })
  @post("{id}")
  static createLef = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
