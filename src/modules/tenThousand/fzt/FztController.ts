import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fzt")
export default class FztController {
  @operation({
    summary: "Get Fzt",
  })
  @get()
  static getFzt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fzt",
  })
  @post("{id}")
  static createFzt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
