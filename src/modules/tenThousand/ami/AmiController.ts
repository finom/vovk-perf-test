import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ami")
export default class AmiController {
  @operation({
    summary: "Get Ami",
  })
  @get()
  static getAmi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ami",
  })
  @post("{id}")
  static createAmi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
