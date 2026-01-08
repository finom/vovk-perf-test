import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jou")
export default class JouController {
  @operation({
    summary: "Get Jou",
  })
  @get()
  static getJou = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jou",
  })
  @post("{id}")
  static createJou = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
