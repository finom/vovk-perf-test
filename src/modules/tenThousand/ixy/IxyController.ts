import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ixy")
export default class IxyController {
  @operation({
    summary: "Get Ixy",
  })
  @get()
  static getIxy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixy",
  })
  @post("{id}")
  static createIxy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
