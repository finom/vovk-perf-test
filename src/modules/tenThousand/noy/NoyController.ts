import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("noy")
export default class NoyController {
  @operation({
    summary: "Get Noy",
  })
  @get()
  static getNoy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Noy",
  })
  @post("{id}")
  static createNoy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
