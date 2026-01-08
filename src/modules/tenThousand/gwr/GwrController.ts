import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gwr")
export default class GwrController {
  @operation({
    summary: "Get Gwr",
  })
  @get()
  static getGwr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwr",
  })
  @post("{id}")
  static createGwr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
