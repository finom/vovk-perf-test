import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bef")
export default class BefController {
  @operation({
    summary: "Get Bef",
  })
  @get()
  static getBef = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bef",
  })
  @post("{id}")
  static createBef = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
