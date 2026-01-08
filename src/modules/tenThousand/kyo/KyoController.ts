import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kyo")
export default class KyoController {
  @operation({
    summary: "Get Kyo",
  })
  @get()
  static getKyo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kyo",
  })
  @post("{id}")
  static createKyo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
