import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dkr")
export default class DkrController {
  @operation({
    summary: "Get Dkr",
  })
  @get()
  static getDkr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dkr",
  })
  @post("{id}")
  static createDkr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
