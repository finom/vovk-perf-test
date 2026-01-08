import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kwo")
export default class KwoController {
  @operation({
    summary: "Get Kwo",
  })
  @get()
  static getKwo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwo",
  })
  @post("{id}")
  static createKwo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
