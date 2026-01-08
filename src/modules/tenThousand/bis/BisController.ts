import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bis")
export default class BisController {
  @operation({
    summary: "Get Bis",
  })
  @get()
  static getBis = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bis",
  })
  @post("{id}")
  static createBis = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
