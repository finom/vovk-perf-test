import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fme")
export default class FmeController {
  @operation({
    summary: "Get Fme",
  })
  @get()
  static getFme = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fme",
  })
  @post("{id}")
  static createFme = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
