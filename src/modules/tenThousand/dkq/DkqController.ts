import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dkq")
export default class DkqController {
  @operation({
    summary: "Get Dkq",
  })
  @get()
  static getDkq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dkq",
  })
  @post("{id}")
  static createDkq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
