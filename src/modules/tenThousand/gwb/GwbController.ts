import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gwb")
export default class GwbController {
  @operation({
    summary: "Get Gwb",
  })
  @get()
  static getGwb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwb",
  })
  @post("{id}")
  static createGwb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
