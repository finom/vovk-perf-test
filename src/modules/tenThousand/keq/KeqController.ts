import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("keq")
export default class KeqController {
  @operation({
    summary: "Get Keq",
  })
  @get()
  static getKeq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Keq",
  })
  @post("{id}")
  static createKeq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
