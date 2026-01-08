import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kib")
export default class KibController {
  @operation({
    summary: "Get Kib",
  })
  @get()
  static getKib = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kib",
  })
  @post("{id}")
  static createKib = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
