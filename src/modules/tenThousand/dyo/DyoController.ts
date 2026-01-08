import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dyo")
export default class DyoController {
  @operation({
    summary: "Get Dyo",
  })
  @get()
  static getDyo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dyo",
  })
  @post("{id}")
  static createDyo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
