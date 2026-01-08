import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("df")
export default class DfController {
  @operation({
    summary: "Get Df",
  })
  @get()
  static getDf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Df",
  })
  @post("{id}")
  static createDf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
