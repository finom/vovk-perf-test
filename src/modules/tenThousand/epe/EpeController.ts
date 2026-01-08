import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("epe")
export default class EpeController {
  @operation({
    summary: "Get Epe",
  })
  @get()
  static getEpe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Epe",
  })
  @post("{id}")
  static createEpe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
