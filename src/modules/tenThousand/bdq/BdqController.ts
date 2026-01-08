import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bdq")
export default class BdqController {
  @operation({
    summary: "Get Bdq",
  })
  @get()
  static getBdq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bdq",
  })
  @post("{id}")
  static createBdq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
