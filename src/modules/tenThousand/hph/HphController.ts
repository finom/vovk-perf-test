import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hph")
export default class HphController {
  @operation({
    summary: "Get Hph",
  })
  @get()
  static getHph = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hph",
  })
  @post("{id}")
  static createHph = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
