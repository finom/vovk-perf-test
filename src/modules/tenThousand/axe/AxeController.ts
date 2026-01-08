import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("axe")
export default class AxeController {
  @operation({
    summary: "Get Axe",
  })
  @get()
  static getAxe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axe",
  })
  @post("{id}")
  static createAxe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
