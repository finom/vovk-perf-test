import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cgl")
export default class CglController {
  @operation({
    summary: "Get Cgl",
  })
  @get()
  static getCgl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgl",
  })
  @post("{id}")
  static createCgl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
