import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ve")
export default class VeController {
  @operation({
    summary: "Get Ve",
  })
  @get()
  static getVe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ve",
  })
  @post("{id}")
  static createVe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
