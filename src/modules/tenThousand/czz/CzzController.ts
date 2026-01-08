import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("czz")
export default class CzzController {
  @operation({
    summary: "Get Czz",
  })
  @get()
  static getCzz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czz",
  })
  @post("{id}")
  static createCzz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
