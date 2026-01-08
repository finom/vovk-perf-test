import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gtd")
export default class GtdController {
  @operation({
    summary: "Get Gtd",
  })
  @get()
  static getGtd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gtd",
  })
  @post("{id}")
  static createGtd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
