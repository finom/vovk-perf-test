import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ihq")
export default class IhqController {
  @operation({
    summary: "Get Ihq",
  })
  @get()
  static getIhq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihq",
  })
  @post("{id}")
  static createIhq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
