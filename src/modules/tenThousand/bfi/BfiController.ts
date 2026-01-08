import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bfi")
export default class BfiController {
  @operation({
    summary: "Get Bfi",
  })
  @get()
  static getBfi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bfi",
  })
  @post("{id}")
  static createBfi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
