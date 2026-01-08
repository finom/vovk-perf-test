import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("htm")
export default class HtmController {
  @operation({
    summary: "Get Htm",
  })
  @get()
  static getHtm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Htm",
  })
  @post("{id}")
  static createHtm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
