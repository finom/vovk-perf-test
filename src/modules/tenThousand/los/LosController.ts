import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("los")
export default class LosController {
  @operation({
    summary: "Get Los",
  })
  @get()
  static getLos = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Los",
  })
  @post("{id}")
  static createLos = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
