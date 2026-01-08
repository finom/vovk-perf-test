import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nbc")
export default class NbcController {
  @operation({
    summary: "Get Nbc",
  })
  @get()
  static getNbc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbc",
  })
  @post("{id}")
  static createNbc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
