import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bue")
export default class BueController {
  @operation({
    summary: "Get Bue",
  })
  @get()
  static getBue = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bue",
  })
  @post("{id}")
  static createBue = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
