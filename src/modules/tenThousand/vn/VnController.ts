import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("vn")
export default class VnController {
  @operation({
    summary: "Get Vn",
  })
  @get()
  static getVn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Vn",
  })
  @post("{id}")
  static createVn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
