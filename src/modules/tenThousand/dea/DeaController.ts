import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dea")
export default class DeaController {
  @operation({
    summary: "Get Dea",
  })
  @get()
  static getDea = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dea",
  })
  @post("{id}")
  static createDea = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
