import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fze")
export default class FzeController {
  @operation({
    summary: "Get Fze",
  })
  @get()
  static getFze = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fze",
  })
  @post("{id}")
  static createFze = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
