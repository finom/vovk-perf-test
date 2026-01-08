import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ngv")
export default class NgvController {
  @operation({
    summary: "Get Ngv",
  })
  @get()
  static getNgv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngv",
  })
  @post("{id}")
  static createNgv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
