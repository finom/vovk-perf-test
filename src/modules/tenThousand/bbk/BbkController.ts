import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bbk")
export default class BbkController {
  @operation({
    summary: "Get Bbk",
  })
  @get()
  static getBbk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbk",
  })
  @post("{id}")
  static createBbk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
