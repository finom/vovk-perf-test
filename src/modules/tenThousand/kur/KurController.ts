import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kur")
export default class KurController {
  @operation({
    summary: "Get Kur",
  })
  @get()
  static getKur = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kur",
  })
  @post("{id}")
  static createKur = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
