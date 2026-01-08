import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kwg")
export default class KwgController {
  @operation({
    summary: "Get Kwg",
  })
  @get()
  static getKwg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwg",
  })
  @post("{id}")
  static createKwg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
