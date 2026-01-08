import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dwy")
export default class DwyController {
  @operation({
    summary: "Get Dwy",
  })
  @get()
  static getDwy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwy",
  })
  @post("{id}")
  static createDwy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
