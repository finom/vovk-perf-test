import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fga")
export default class FgaController {
  @operation({
    summary: "Get Fga",
  })
  @get()
  static getFga = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fga",
  })
  @post("{id}")
  static createFga = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
