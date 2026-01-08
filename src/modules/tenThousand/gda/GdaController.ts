import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gda")
export default class GdaController {
  @operation({
    summary: "Get Gda",
  })
  @get()
  static getGda = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gda",
  })
  @post("{id}")
  static createGda = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
