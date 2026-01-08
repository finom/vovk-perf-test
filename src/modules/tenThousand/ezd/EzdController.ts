import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ezd")
export default class EzdController {
  @operation({
    summary: "Get Ezd",
  })
  @get()
  static getEzd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezd",
  })
  @post("{id}")
  static createEzd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
