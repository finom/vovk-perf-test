import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iwi")
export default class IwiController {
  @operation({
    summary: "Get Iwi",
  })
  @get()
  static getIwi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwi",
  })
  @post("{id}")
  static createIwi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
