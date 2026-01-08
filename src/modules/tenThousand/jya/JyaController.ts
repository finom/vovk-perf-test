import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jya")
export default class JyaController {
  @operation({
    summary: "Get Jya",
  })
  @get()
  static getJya = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jya",
  })
  @post("{id}")
  static createJya = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
