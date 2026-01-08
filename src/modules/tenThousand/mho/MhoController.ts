import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mho")
export default class MhoController {
  @operation({
    summary: "Get Mho",
  })
  @get()
  static getMho = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mho",
  })
  @post("{id}")
  static createMho = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
