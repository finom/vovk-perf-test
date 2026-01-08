import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("htq")
export default class HtqController {
  @operation({
    summary: "Get Htq",
  })
  @get()
  static getHtq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Htq",
  })
  @post("{id}")
  static createHtq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
