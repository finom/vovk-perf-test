import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dkd")
export default class DkdController {
  @operation({
    summary: "Get Dkd",
  })
  @get()
  static getDkd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dkd",
  })
  @post("{id}")
  static createDkd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
