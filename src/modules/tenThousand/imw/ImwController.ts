import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("imw")
export default class ImwController {
  @operation({
    summary: "Get Imw",
  })
  @get()
  static getImw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Imw",
  })
  @post("{id}")
  static createImw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
