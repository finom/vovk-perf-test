import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mzo")
export default class MzoController {
  @operation({
    summary: "Get Mzo",
  })
  @get()
  static getMzo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzo",
  })
  @post("{id}")
  static createMzo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
