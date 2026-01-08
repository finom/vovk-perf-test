import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fdu")
export default class FduController {
  @operation({
    summary: "Get Fdu",
  })
  @get()
  static getFdu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fdu",
  })
  @post("{id}")
  static createFdu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
