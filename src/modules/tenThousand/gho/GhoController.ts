import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gho")
export default class GhoController {
  @operation({
    summary: "Get Gho",
  })
  @get()
  static getGho = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gho",
  })
  @post("{id}")
  static createGho = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
