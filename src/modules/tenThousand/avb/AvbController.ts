import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("avb")
export default class AvbController {
  @operation({
    summary: "Get Avb",
  })
  @get()
  static getAvb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avb",
  })
  @post("{id}")
  static createAvb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
