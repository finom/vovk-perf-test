import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("buu")
export default class BuuController {
  @operation({
    summary: "Get Buu",
  })
  @get()
  static getBuu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Buu",
  })
  @post("{id}")
  static createBuu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
