import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gmk")
export default class GmkController {
  @operation({
    summary: "Get Gmk",
  })
  @get()
  static getGmk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gmk",
  })
  @post("{id}")
  static createGmk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
