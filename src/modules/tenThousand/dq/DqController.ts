import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dq")
export default class DqController {
  @operation({
    summary: "Get Dq",
  })
  @get()
  static getDq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dq",
  })
  @post("{id}")
  static createDq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
