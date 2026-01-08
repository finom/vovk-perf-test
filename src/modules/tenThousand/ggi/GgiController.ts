import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ggi")
export default class GgiController {
  @operation({
    summary: "Get Ggi",
  })
  @get()
  static getGgi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggi",
  })
  @post("{id}")
  static createGgi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
