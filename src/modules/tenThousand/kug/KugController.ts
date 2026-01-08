import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kug")
export default class KugController {
  @operation({
    summary: "Get Kug",
  })
  @get()
  static getKug = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kug",
  })
  @post("{id}")
  static createKug = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
