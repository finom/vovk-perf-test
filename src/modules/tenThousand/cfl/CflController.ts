import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cfl")
export default class CflController {
  @operation({
    summary: "Get Cfl",
  })
  @get()
  static getCfl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cfl",
  })
  @post("{id}")
  static createCfl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
