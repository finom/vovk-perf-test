import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bzz")
export default class BzzController {
  @operation({
    summary: "Get Bzz",
  })
  @get()
  static getBzz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bzz",
  })
  @post("{id}")
  static createBzz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
