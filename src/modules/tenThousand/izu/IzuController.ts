import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("izu")
export default class IzuController {
  @operation({
    summary: "Get Izu",
  })
  @get()
  static getIzu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Izu",
  })
  @post("{id}")
  static createIzu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
