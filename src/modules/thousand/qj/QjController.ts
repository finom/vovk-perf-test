import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("qj")
export default class QjController {
  @operation({
    summary: "Get Qj",
  })
  @get()
  static getQj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qj",
  })
  @post("{id}")
  static createQj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
