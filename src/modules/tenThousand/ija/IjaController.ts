import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ija")
export default class IjaController {
  @operation({
    summary: "Get Ija",
  })
  @get()
  static getIja = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ija",
  })
  @post("{id}")
  static createIja = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
