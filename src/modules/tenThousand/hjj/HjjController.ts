import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hjj")
export default class HjjController {
  @operation({
    summary: "Get Hjj",
  })
  @get()
  static getHjj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hjj",
  })
  @post("{id}")
  static createHjj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
