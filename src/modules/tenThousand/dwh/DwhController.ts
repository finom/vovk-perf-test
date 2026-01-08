import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dwh")
export default class DwhController {
  @operation({
    summary: "Get Dwh",
  })
  @get()
  static getDwh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwh",
  })
  @post("{id}")
  static createDwh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
