import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dli")
export default class DliController {
  @operation({
    summary: "Get Dli",
  })
  @get()
  static getDli = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dli",
  })
  @post("{id}")
  static createDli = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
