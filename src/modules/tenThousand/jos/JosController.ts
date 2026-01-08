import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jos")
export default class JosController {
  @operation({
    summary: "Get Jos",
  })
  @get()
  static getJos = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jos",
  })
  @post("{id}")
  static createJos = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
