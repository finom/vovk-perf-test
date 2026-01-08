import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ild")
export default class IldController {
  @operation({
    summary: "Get Ild",
  })
  @get()
  static getIld = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ild",
  })
  @post("{id}")
  static createIld = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
