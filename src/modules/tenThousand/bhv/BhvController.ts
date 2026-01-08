import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bhv")
export default class BhvController {
  @operation({
    summary: "Get Bhv",
  })
  @get()
  static getBhv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhv",
  })
  @post("{id}")
  static createBhv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
