import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("duj")
export default class DujController {
  @operation({
    summary: "Get Duj",
  })
  @get()
  static getDuj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Duj",
  })
  @post("{id}")
  static createDuj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
