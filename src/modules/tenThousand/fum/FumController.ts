import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fum")
export default class FumController {
  @operation({
    summary: "Get Fum",
  })
  @get()
  static getFum = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fum",
  })
  @post("{id}")
  static createFum = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
