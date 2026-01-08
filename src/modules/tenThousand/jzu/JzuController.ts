import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jzu")
export default class JzuController {
  @operation({
    summary: "Get Jzu",
  })
  @get()
  static getJzu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jzu",
  })
  @post("{id}")
  static createJzu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
