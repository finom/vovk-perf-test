import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("flb")
export default class FlbController {
  @operation({
    summary: "Get Flb",
  })
  @get()
  static getFlb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Flb",
  })
  @post("{id}")
  static createFlb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
