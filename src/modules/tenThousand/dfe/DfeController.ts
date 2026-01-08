import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dfe")
export default class DfeController {
  @operation({
    summary: "Get Dfe",
  })
  @get()
  static getDfe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfe",
  })
  @post("{id}")
  static createDfe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
