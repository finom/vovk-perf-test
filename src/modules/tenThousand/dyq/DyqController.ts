import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dyq")
export default class DyqController {
  @operation({
    summary: "Get Dyq",
  })
  @get()
  static getDyq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dyq",
  })
  @post("{id}")
  static createDyq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
