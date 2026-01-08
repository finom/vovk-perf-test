import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eaa")
export default class EaaController {
  @operation({
    summary: "Get Eaa",
  })
  @get()
  static getEaa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eaa",
  })
  @post("{id}")
  static createEaa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
