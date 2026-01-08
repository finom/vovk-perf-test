import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kip")
export default class KipController {
  @operation({
    summary: "Get Kip",
  })
  @get()
  static getKip = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kip",
  })
  @post("{id}")
  static createKip = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
