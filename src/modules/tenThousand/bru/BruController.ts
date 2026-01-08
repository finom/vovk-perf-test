import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bru")
export default class BruController {
  @operation({
    summary: "Get Bru",
  })
  @get()
  static getBru = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bru",
  })
  @post("{id}")
  static createBru = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
