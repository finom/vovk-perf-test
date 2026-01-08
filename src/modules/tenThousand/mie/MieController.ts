import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mie")
export default class MieController {
  @operation({
    summary: "Get Mie",
  })
  @get()
  static getMie = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mie",
  })
  @post("{id}")
  static createMie = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
