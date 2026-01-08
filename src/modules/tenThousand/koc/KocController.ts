import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("koc")
export default class KocController {
  @operation({
    summary: "Get Koc",
  })
  @get()
  static getKoc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Koc",
  })
  @post("{id}")
  static createKoc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
