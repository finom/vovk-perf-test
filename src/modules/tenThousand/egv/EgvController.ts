import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("egv")
export default class EgvController {
  @operation({
    summary: "Get Egv",
  })
  @get()
  static getEgv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Egv",
  })
  @post("{id}")
  static createEgv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
