import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("agg")
export default class AggController {
  @operation({
    summary: "Get Agg",
  })
  @get()
  static getAgg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Agg",
  })
  @post("{id}")
  static createAgg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
