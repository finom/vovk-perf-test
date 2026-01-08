import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mgf")
export default class MgfController {
  @operation({
    summary: "Get Mgf",
  })
  @get()
  static getMgf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgf",
  })
  @post("{id}")
  static createMgf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
