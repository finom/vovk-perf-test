import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kop")
export default class KopController {
  @operation({
    summary: "Get Kop",
  })
  @get()
  static getKop = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kop",
  })
  @post("{id}")
  static createKop = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
