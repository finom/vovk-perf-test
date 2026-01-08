import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ndu")
export default class NduController {
  @operation({
    summary: "Get Ndu",
  })
  @get()
  static getNdu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ndu",
  })
  @post("{id}")
  static createNdu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
