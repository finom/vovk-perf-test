import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eaj")
export default class EajController {
  @operation({
    summary: "Get Eaj",
  })
  @get()
  static getEaj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eaj",
  })
  @post("{id}")
  static createEaj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
