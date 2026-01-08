import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bf")
export default class BfController {
  @operation({
    summary: "Get Bf",
  })
  @get()
  static getBf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bf",
  })
  @post("{id}")
  static createBf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
