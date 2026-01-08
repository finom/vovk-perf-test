import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fnf")
export default class FnfController {
  @operation({
    summary: "Get Fnf",
  })
  @get()
  static getFnf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fnf",
  })
  @post("{id}")
  static createFnf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
