import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ghk")
export default class GhkController {
  @operation({
    summary: "Get Ghk",
  })
  @get()
  static getGhk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ghk",
  })
  @post("{id}")
  static createGhk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
