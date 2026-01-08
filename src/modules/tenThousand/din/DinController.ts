import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("din")
export default class DinController {
  @operation({
    summary: "Get Din",
  })
  @get()
  static getDin = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Din",
  })
  @post("{id}")
  static createDin = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
