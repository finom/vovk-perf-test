import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cqi")
export default class CqiController {
  @operation({
    summary: "Get Cqi",
  })
  @get()
  static getCqi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqi",
  })
  @post("{id}")
  static createCqi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
