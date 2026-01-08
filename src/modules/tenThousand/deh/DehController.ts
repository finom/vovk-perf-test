import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("deh")
export default class DehController {
  @operation({
    summary: "Get Deh",
  })
  @get()
  static getDeh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Deh",
  })
  @post("{id}")
  static createDeh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
