import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gir")
export default class GirController {
  @operation({
    summary: "Get Gir",
  })
  @get()
  static getGir = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gir",
  })
  @post("{id}")
  static createGir = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
