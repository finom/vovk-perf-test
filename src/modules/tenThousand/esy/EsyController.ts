import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("esy")
export default class EsyController {
  @operation({
    summary: "Get Esy",
  })
  @get()
  static getEsy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Esy",
  })
  @post("{id}")
  static createEsy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
