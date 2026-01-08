import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bpt")
export default class BptController {
  @operation({
    summary: "Get Bpt",
  })
  @get()
  static getBpt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpt",
  })
  @post("{id}")
  static createBpt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
