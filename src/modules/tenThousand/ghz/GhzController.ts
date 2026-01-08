import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ghz")
export default class GhzController {
  @operation({
    summary: "Get Ghz",
  })
  @get()
  static getGhz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ghz",
  })
  @post("{id}")
  static createGhz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
