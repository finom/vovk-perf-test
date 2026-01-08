import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("br")
export default class BrController {
  @operation({
    summary: "Get Br",
  })
  @get()
  static getBr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Br",
  })
  @post("{id}")
  static createBr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
