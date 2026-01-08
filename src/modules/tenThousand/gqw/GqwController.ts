import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gqw")
export default class GqwController {
  @operation({
    summary: "Get Gqw",
  })
  @get()
  static getGqw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gqw",
  })
  @post("{id}")
  static createGqw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
