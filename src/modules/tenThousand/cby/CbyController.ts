import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cby")
export default class CbyController {
  @operation({
    summary: "Get Cby",
  })
  @get()
  static getCby = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cby",
  })
  @post("{id}")
  static createCby = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
