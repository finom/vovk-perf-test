import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bev")
export default class BevController {
  @operation({
    summary: "Get Bev",
  })
  @get()
  static getBev = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bev",
  })
  @post("{id}")
  static createBev = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
