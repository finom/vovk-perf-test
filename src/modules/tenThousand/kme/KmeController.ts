import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kme")
export default class KmeController {
  @operation({
    summary: "Get Kme",
  })
  @get()
  static getKme = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kme",
  })
  @post("{id}")
  static createKme = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
