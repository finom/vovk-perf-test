import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lqv")
export default class LqvController {
  @operation({
    summary: "Get Lqv",
  })
  @get()
  static getLqv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lqv",
  })
  @post("{id}")
  static createLqv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
