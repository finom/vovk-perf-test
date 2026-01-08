import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hjq")
export default class HjqController {
  @operation({
    summary: "Get Hjq",
  })
  @get()
  static getHjq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hjq",
  })
  @post("{id}")
  static createHjq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
