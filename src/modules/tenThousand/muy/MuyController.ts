import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("muy")
export default class MuyController {
  @operation({
    summary: "Get Muy",
  })
  @get()
  static getMuy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Muy",
  })
  @post("{id}")
  static createMuy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
