import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gol")
export default class GolController {
  @operation({
    summary: "Get Gol",
  })
  @get()
  static getGol = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gol",
  })
  @post("{id}")
  static createGol = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
