import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dgo")
export default class DgoController {
  @operation({
    summary: "Get Dgo",
  })
  @get()
  static getDgo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgo",
  })
  @post("{id}")
  static createDgo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
