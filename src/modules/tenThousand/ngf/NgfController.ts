import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ngf")
export default class NgfController {
  @operation({
    summary: "Get Ngf",
  })
  @get()
  static getNgf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngf",
  })
  @post("{id}")
  static createNgf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
