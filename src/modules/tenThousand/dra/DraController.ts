import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dra")
export default class DraController {
  @operation({
    summary: "Get Dra",
  })
  @get()
  static getDra = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dra",
  })
  @post("{id}")
  static createDra = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
