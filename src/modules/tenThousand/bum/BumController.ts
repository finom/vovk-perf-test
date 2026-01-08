import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bum")
export default class BumController {
  @operation({
    summary: "Get Bum",
  })
  @get()
  static getBum = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bum",
  })
  @post("{id}")
  static createBum = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
