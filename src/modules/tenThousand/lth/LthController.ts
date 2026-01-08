import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lth")
export default class LthController {
  @operation({
    summary: "Get Lth",
  })
  @get()
  static getLth = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lth",
  })
  @post("{id}")
  static createLth = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
