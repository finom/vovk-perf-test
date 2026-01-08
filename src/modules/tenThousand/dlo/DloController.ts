import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dlo")
export default class DloController {
  @operation({
    summary: "Get Dlo",
  })
  @get()
  static getDlo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dlo",
  })
  @post("{id}")
  static createDlo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
