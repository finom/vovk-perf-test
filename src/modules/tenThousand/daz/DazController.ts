import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("daz")
export default class DazController {
  @operation({
    summary: "Get Daz",
  })
  @get()
  static getDaz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Daz",
  })
  @post("{id}")
  static createDaz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
