import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dkp")
export default class DkpController {
  @operation({
    summary: "Get Dkp",
  })
  @get()
  static getDkp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dkp",
  })
  @post("{id}")
  static createDkp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
