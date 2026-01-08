import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mig")
export default class MigController {
  @operation({
    summary: "Get Mig",
  })
  @get()
  static getMig = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mig",
  })
  @post("{id}")
  static createMig = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
