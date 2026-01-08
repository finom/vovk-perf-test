import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fyy")
export default class FyyController {
  @operation({
    summary: "Get Fyy",
  })
  @get()
  static getFyy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fyy",
  })
  @post("{id}")
  static createFyy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
