import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gtw")
export default class GtwController {
  @operation({
    summary: "Get Gtw",
  })
  @get()
  static getGtw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gtw",
  })
  @post("{id}")
  static createGtw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
