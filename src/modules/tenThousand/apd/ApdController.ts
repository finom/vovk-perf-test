import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("apd")
export default class ApdController {
  @operation({
    summary: "Get Apd",
  })
  @get()
  static getApd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Apd",
  })
  @post("{id}")
  static createApd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
