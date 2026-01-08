import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fip")
export default class FipController {
  @operation({
    summary: "Get Fip",
  })
  @get()
  static getFip = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fip",
  })
  @post("{id}")
  static createFip = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
