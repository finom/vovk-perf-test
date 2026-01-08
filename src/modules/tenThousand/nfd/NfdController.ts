import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nfd")
export default class NfdController {
  @operation({
    summary: "Get Nfd",
  })
  @get()
  static getNfd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfd",
  })
  @post("{id}")
  static createNfd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
