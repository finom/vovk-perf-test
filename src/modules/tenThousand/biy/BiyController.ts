import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("biy")
export default class BiyController {
  @operation({
    summary: "Get Biy",
  })
  @get()
  static getBiy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Biy",
  })
  @post("{id}")
  static createBiy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
