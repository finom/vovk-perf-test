import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mwr")
export default class MwrController {
  @operation({
    summary: "Get Mwr",
  })
  @get()
  static getMwr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mwr",
  })
  @post("{id}")
  static createMwr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
