import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ksu")
export default class KsuController {
  @operation({
    summary: "Get Ksu",
  })
  @get()
  static getKsu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ksu",
  })
  @post("{id}")
  static createKsu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
