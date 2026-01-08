import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nnd")
export default class NndController {
  @operation({
    summary: "Get Nnd",
  })
  @get()
  static getNnd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nnd",
  })
  @post("{id}")
  static createNnd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
