import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("duh")
export default class DuhController {
  @operation({
    summary: "Get Duh",
  })
  @get()
  static getDuh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Duh",
  })
  @post("{id}")
  static createDuh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
