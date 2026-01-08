import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ny")
export default class NyController {
  @operation({
    summary: "Get Ny",
  })
  @get()
  static getNy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ny",
  })
  @post("{id}")
  static createNy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
