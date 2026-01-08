import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gmn")
export default class GmnController {
  @operation({
    summary: "Get Gmn",
  })
  @get()
  static getGmn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gmn",
  })
  @post("{id}")
  static createGmn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
