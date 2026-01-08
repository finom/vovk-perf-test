import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("daa")
export default class DaaController {
  @operation({
    summary: "Get Daa",
  })
  @get()
  static getDaa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Daa",
  })
  @post("{id}")
  static createDaa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
