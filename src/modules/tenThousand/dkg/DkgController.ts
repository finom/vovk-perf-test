import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dkg")
export default class DkgController {
  @operation({
    summary: "Get Dkg",
  })
  @get()
  static getDkg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dkg",
  })
  @post("{id}")
  static createDkg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
