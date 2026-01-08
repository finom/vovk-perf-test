import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hbs")
export default class HbsController {
  @operation({
    summary: "Get Hbs",
  })
  @get()
  static getHbs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hbs",
  })
  @post("{id}")
  static createHbs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
