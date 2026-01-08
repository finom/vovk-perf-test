import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("atd")
export default class AtdController {
  @operation({
    summary: "Get Atd",
  })
  @get()
  static getAtd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Atd",
  })
  @post("{id}")
  static createAtd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
