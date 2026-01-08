import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bsv")
export default class BsvController {
  @operation({
    summary: "Get Bsv",
  })
  @get()
  static getBsv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bsv",
  })
  @post("{id}")
  static createBsv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
