import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bvj")
export default class BvjController {
  @operation({
    summary: "Get Bvj",
  })
  @get()
  static getBvj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvj",
  })
  @post("{id}")
  static createBvj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
