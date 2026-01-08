import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ro")
export default class RoController {
  @operation({
    summary: "Get Ro",
  })
  @get()
  static getRo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ro",
  })
  @post("{id}")
  static createRo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
