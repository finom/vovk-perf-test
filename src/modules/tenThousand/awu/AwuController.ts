import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("awu")
export default class AwuController {
  @operation({
    summary: "Get Awu",
  })
  @get()
  static getAwu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Awu",
  })
  @post("{id}")
  static createAwu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
