import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fvo")
export default class FvoController {
  @operation({
    summary: "Get Fvo",
  })
  @get()
  static getFvo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fvo",
  })
  @post("{id}")
  static createFvo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
