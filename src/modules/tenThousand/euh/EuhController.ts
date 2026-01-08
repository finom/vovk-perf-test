import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("euh")
export default class EuhController {
  @operation({
    summary: "Get Euh",
  })
  @get()
  static getEuh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Euh",
  })
  @post("{id}")
  static createEuh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
