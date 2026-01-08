import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dtn")
export default class DtnController {
  @operation({
    summary: "Get Dtn",
  })
  @get()
  static getDtn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dtn",
  })
  @post("{id}")
  static createDtn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
