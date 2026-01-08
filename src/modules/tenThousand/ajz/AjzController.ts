import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ajz")
export default class AjzController {
  @operation({
    summary: "Get Ajz",
  })
  @get()
  static getAjz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ajz",
  })
  @post("{id}")
  static createAjz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
