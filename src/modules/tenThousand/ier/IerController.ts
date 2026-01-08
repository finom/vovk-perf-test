import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ier")
export default class IerController {
  @operation({
    summary: "Get Ier",
  })
  @get()
  static getIer = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ier",
  })
  @post("{id}")
  static createIer = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
