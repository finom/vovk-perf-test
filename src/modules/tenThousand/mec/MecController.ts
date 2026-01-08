import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mec")
export default class MecController {
  @operation({
    summary: "Get Mec",
  })
  @get()
  static getMec = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mec",
  })
  @post("{id}")
  static createMec = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
