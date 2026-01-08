import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("enj")
export default class EnjController {
  @operation({
    summary: "Get Enj",
  })
  @get()
  static getEnj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Enj",
  })
  @post("{id}")
  static createEnj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
