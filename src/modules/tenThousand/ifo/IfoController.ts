import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ifo")
export default class IfoController {
  @operation({
    summary: "Get Ifo",
  })
  @get()
  static getIfo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ifo",
  })
  @post("{id}")
  static createIfo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
