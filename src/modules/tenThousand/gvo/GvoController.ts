import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gvo")
export default class GvoController {
  @operation({
    summary: "Get Gvo",
  })
  @get()
  static getGvo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gvo",
  })
  @post("{id}")
  static createGvo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
