import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dgy")
export default class DgyController {
  @operation({
    summary: "Get Dgy",
  })
  @get()
  static getDgy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgy",
  })
  @post("{id}")
  static createDgy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
