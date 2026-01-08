import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ize")
export default class IzeController {
  @operation({
    summary: "Get Ize",
  })
  @get()
  static getIze = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ize",
  })
  @post("{id}")
  static createIze = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
