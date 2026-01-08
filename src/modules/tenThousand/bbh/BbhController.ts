import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bbh")
export default class BbhController {
  @operation({
    summary: "Get Bbh",
  })
  @get()
  static getBbh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbh",
  })
  @post("{id}")
  static createBbh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
