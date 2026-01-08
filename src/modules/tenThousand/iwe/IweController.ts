import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iwe")
export default class IweController {
  @operation({
    summary: "Get Iwe",
  })
  @get()
  static getIwe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwe",
  })
  @post("{id}")
  static createIwe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
