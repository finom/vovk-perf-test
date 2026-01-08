import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("moz")
export default class MozController {
  @operation({
    summary: "Get Moz",
  })
  @get()
  static getMoz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Moz",
  })
  @post("{id}")
  static createMoz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
