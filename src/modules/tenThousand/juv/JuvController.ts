import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("juv")
export default class JuvController {
  @operation({
    summary: "Get Juv",
  })
  @get()
  static getJuv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Juv",
  })
  @post("{id}")
  static createJuv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
