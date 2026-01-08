import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("njk")
export default class NjkController {
  @operation({
    summary: "Get Njk",
  })
  @get()
  static getNjk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Njk",
  })
  @post("{id}")
  static createNjk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
