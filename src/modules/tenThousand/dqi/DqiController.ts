import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dqi")
export default class DqiController {
  @operation({
    summary: "Get Dqi",
  })
  @get()
  static getDqi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqi",
  })
  @post("{id}")
  static createDqi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
