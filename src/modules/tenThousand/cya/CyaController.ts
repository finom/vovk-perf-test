import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cya")
export default class CyaController {
  @operation({
    summary: "Get Cya",
  })
  @get()
  static getCya = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cya",
  })
  @post("{id}")
  static createCya = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
