import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fac")
export default class FacController {
  @operation({
    summary: "Get Fac",
  })
  @get()
  static getFac = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fac",
  })
  @post("{id}")
  static createFac = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
