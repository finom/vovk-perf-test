import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jez")
export default class JezController {
  @operation({
    summary: "Get Jez",
  })
  @get()
  static getJez = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jez",
  })
  @post("{id}")
  static createJez = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
