import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cxh")
export default class CxhController {
  @operation({
    summary: "Get Cxh",
  })
  @get()
  static getCxh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cxh",
  })
  @post("{id}")
  static createCxh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
