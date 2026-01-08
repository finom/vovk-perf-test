import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("igv")
export default class IgvController {
  @operation({
    summary: "Get Igv",
  })
  @get()
  static getIgv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igv",
  })
  @post("{id}")
  static createIgv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
