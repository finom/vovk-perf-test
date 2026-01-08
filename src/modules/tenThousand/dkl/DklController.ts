import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dkl")
export default class DklController {
  @operation({
    summary: "Get Dkl",
  })
  @get()
  static getDkl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dkl",
  })
  @post("{id}")
  static createDkl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
