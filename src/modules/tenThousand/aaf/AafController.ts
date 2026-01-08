import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aaf")
export default class AafController {
  @operation({
    summary: "Get Aaf",
  })
  @get()
  static getAaf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aaf",
  })
  @post("{id}")
  static createAaf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
