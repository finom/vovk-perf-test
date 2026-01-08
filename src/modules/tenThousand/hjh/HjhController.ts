import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hjh")
export default class HjhController {
  @operation({
    summary: "Get Hjh",
  })
  @get()
  static getHjh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hjh",
  })
  @post("{id}")
  static createHjh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
