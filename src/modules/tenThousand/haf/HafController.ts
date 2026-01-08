import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("haf")
export default class HafController {
  @operation({
    summary: "Get Haf",
  })
  @get()
  static getHaf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Haf",
  })
  @post("{id}")
  static createHaf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
