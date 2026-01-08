import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kyt")
export default class KytController {
  @operation({
    summary: "Get Kyt",
  })
  @get()
  static getKyt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kyt",
  })
  @post("{id}")
  static createKyt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
