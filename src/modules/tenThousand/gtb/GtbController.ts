import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gtb")
export default class GtbController {
  @operation({
    summary: "Get Gtb",
  })
  @get()
  static getGtb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gtb",
  })
  @post("{id}")
  static createGtb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
