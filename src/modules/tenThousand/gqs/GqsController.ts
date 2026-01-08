import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gqs")
export default class GqsController {
  @operation({
    summary: "Get Gqs",
  })
  @get()
  static getGqs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gqs",
  })
  @post("{id}")
  static createGqs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
