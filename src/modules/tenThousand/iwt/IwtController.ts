import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iwt")
export default class IwtController {
  @operation({
    summary: "Get Iwt",
  })
  @get()
  static getIwt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwt",
  })
  @post("{id}")
  static createIwt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
