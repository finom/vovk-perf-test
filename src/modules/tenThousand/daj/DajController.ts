import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("daj")
export default class DajController {
  @operation({
    summary: "Get Daj",
  })
  @get()
  static getDaj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Daj",
  })
  @post("{id}")
  static createDaj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
