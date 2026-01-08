import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ow")
export default class OwController {
  @operation({
    summary: "Get Ow",
  })
  @get()
  static getOw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ow",
  })
  @post("{id}")
  static createOw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
