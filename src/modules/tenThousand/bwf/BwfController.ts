import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bwf")
export default class BwfController {
  @operation({
    summary: "Get Bwf",
  })
  @get()
  static getBwf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwf",
  })
  @post("{id}")
  static createBwf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
