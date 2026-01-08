import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cxg")
export default class CxgController {
  @operation({
    summary: "Get Cxg",
  })
  @get()
  static getCxg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cxg",
  })
  @post("{id}")
  static createCxg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
