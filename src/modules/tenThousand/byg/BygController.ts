import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("byg")
export default class BygController {
  @operation({
    summary: "Get Byg",
  })
  @get()
  static getByg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Byg",
  })
  @post("{id}")
  static createByg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
