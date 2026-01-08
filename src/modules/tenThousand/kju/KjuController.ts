import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kju")
export default class KjuController {
  @operation({
    summary: "Get Kju",
  })
  @get()
  static getKju = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kju",
  })
  @post("{id}")
  static createKju = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
