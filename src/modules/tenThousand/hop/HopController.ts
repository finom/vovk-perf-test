import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hop")
export default class HopController {
  @operation({
    summary: "Get Hop",
  })
  @get()
  static getHop = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hop",
  })
  @post("{id}")
  static createHop = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
