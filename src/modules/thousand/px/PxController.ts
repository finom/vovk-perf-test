import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("px")
export default class PxController {
  @operation({
    summary: "Get Px",
  })
  @get()
  static getPx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Px",
  })
  @post("{id}")
  static createPx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
