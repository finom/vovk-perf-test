import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kik")
export default class KikController {
  @operation({
    summary: "Get Kik",
  })
  @get()
  static getKik = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kik",
  })
  @post("{id}")
  static createKik = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
