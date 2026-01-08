import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kqt")
export default class KqtController {
  @operation({
    summary: "Get Kqt",
  })
  @get()
  static getKqt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqt",
  })
  @post("{id}")
  static createKqt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
