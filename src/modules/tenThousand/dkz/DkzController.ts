import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dkz")
export default class DkzController {
  @operation({
    summary: "Get Dkz",
  })
  @get()
  static getDkz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dkz",
  })
  @post("{id}")
  static createDkz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
