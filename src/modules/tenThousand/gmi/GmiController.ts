import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gmi")
export default class GmiController {
  @operation({
    summary: "Get Gmi",
  })
  @get()
  static getGmi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gmi",
  })
  @post("{id}")
  static createGmi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
