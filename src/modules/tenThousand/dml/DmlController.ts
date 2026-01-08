import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dml")
export default class DmlController {
  @operation({
    summary: "Get Dml",
  })
  @get()
  static getDml = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dml",
  })
  @post("{id}")
  static createDml = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
