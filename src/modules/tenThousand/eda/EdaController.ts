import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eda")
export default class EdaController {
  @operation({
    summary: "Get Eda",
  })
  @get()
  static getEda = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eda",
  })
  @post("{id}")
  static createEda = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
