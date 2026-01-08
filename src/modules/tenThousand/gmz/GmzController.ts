import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gmz")
export default class GmzController {
  @operation({
    summary: "Get Gmz",
  })
  @get()
  static getGmz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gmz",
  })
  @post("{id}")
  static createGmz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
