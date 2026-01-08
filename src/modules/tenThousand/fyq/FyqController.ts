import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fyq")
export default class FyqController {
  @operation({
    summary: "Get Fyq",
  })
  @get()
  static getFyq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fyq",
  })
  @post("{id}")
  static createFyq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
