import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kqc")
export default class KqcController {
  @operation({
    summary: "Get Kqc",
  })
  @get()
  static getKqc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqc",
  })
  @post("{id}")
  static createKqc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
