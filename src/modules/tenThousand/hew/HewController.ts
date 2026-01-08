import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hew")
export default class HewController {
  @operation({
    summary: "Get Hew",
  })
  @get()
  static getHew = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hew",
  })
  @post("{id}")
  static createHew = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
