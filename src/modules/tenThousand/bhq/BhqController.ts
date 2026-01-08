import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bhq")
export default class BhqController {
  @operation({
    summary: "Get Bhq",
  })
  @get()
  static getBhq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhq",
  })
  @post("{id}")
  static createBhq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
