import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lym")
export default class LymController {
  @operation({
    summary: "Get Lym",
  })
  @get()
  static getLym = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lym",
  })
  @post("{id}")
  static createLym = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
