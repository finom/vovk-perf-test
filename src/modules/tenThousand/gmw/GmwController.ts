import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gmw")
export default class GmwController {
  @operation({
    summary: "Get Gmw",
  })
  @get()
  static getGmw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gmw",
  })
  @post("{id}")
  static createGmw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
