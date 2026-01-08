import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("brn")
export default class BrnController {
  @operation({
    summary: "Get Brn",
  })
  @get()
  static getBrn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Brn",
  })
  @post("{id}")
  static createBrn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
