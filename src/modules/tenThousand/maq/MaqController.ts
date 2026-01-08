import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("maq")
export default class MaqController {
  @operation({
    summary: "Get Maq",
  })
  @get()
  static getMaq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Maq",
  })
  @post("{id}")
  static createMaq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
