import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("brx")
export default class BrxController {
  @operation({
    summary: "Get Brx",
  })
  @get()
  static getBrx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Brx",
  })
  @post("{id}")
  static createBrx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
