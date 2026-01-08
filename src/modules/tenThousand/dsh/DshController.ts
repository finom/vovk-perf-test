import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dsh")
export default class DshController {
  @operation({
    summary: "Get Dsh",
  })
  @get()
  static getDsh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dsh",
  })
  @post("{id}")
  static createDsh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
