import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bxx")
export default class BxxController {
  @operation({
    summary: "Get Bxx",
  })
  @get()
  static getBxx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxx",
  })
  @post("{id}")
  static createBxx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
