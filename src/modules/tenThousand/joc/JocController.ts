import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("joc")
export default class JocController {
  @operation({
    summary: "Get Joc",
  })
  @get()
  static getJoc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Joc",
  })
  @post("{id}")
  static createJoc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
