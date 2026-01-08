import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("pz")
export default class PzController {
  @operation({
    summary: "Get Pz",
  })
  @get()
  static getPz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Pz",
  })
  @post("{id}")
  static createPz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
