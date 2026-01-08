import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("azz")
export default class AzzController {
  @operation({
    summary: "Get Azz",
  })
  @get()
  static getAzz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azz",
  })
  @post("{id}")
  static createAzz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
