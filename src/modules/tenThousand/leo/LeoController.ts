import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("leo")
export default class LeoController {
  @operation({
    summary: "Get Leo",
  })
  @get()
  static getLeo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Leo",
  })
  @post("{id}")
  static createLeo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
