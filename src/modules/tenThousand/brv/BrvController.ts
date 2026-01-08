import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("brv")
export default class BrvController {
  @operation({
    summary: "Get Brv",
  })
  @get()
  static getBrv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Brv",
  })
  @post("{id}")
  static createBrv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
