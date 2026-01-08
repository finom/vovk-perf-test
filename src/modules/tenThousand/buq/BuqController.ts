import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("buq")
export default class BuqController {
  @operation({
    summary: "Get Buq",
  })
  @get()
  static getBuq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Buq",
  })
  @post("{id}")
  static createBuq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
