import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gra")
export default class GraController {
  @operation({
    summary: "Get Gra",
  })
  @get()
  static getGra = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gra",
  })
  @post("{id}")
  static createGra = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
