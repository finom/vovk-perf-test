import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nap")
export default class NapController {
  @operation({
    summary: "Get Nap",
  })
  @get()
  static getNap = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nap",
  })
  @post("{id}")
  static createNap = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
