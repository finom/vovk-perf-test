import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kaw")
export default class KawController {
  @operation({
    summary: "Get Kaw",
  })
  @get()
  static getKaw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kaw",
  })
  @post("{id}")
  static createKaw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
