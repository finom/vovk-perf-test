import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dkj")
export default class DkjController {
  @operation({
    summary: "Get Dkj",
  })
  @get()
  static getDkj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dkj",
  })
  @post("{id}")
  static createDkj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
