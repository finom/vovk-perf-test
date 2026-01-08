import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bdu")
export default class BduController {
  @operation({
    summary: "Get Bdu",
  })
  @get()
  static getBdu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bdu",
  })
  @post("{id}")
  static createBdu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
