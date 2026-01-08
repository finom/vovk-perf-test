import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ihj")
export default class IhjController {
  @operation({
    summary: "Get Ihj",
  })
  @get()
  static getIhj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihj",
  })
  @post("{id}")
  static createIhj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
