import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("duq")
export default class DuqController {
  @operation({
    summary: "Get Duq",
  })
  @get()
  static getDuq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Duq",
  })
  @post("{id}")
  static createDuq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
