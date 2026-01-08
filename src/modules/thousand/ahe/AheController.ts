import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ahe")
export default class AheController {
  @operation({
    summary: "Get Ahe",
  })
  @get()
  static getAhe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ahe",
  })
  @post("{id}")
  static createAhe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
