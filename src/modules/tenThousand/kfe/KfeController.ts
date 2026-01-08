import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kfe")
export default class KfeController {
  @operation({
    summary: "Get Kfe",
  })
  @get()
  static getKfe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfe",
  })
  @post("{id}")
  static createKfe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
