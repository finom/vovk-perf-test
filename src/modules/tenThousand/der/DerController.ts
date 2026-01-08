import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("der")
export default class DerController {
  @operation({
    summary: "Get Der",
  })
  @get()
  static getDer = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Der",
  })
  @post("{id}")
  static createDer = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
