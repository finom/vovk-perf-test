import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ipr")
export default class IprController {
  @operation({
    summary: "Get Ipr",
  })
  @get()
  static getIpr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ipr",
  })
  @post("{id}")
  static createIpr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
