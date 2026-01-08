import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kpu")
export default class KpuController {
  @operation({
    summary: "Get Kpu",
  })
  @get()
  static getKpu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kpu",
  })
  @post("{id}")
  static createKpu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
