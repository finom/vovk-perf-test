import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("afd")
export default class AfdController {
  @operation({
    summary: "Get Afd",
  })
  @get()
  static getAfd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Afd",
  })
  @post("{id}")
  static createAfd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
