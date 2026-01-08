import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ezc")
export default class EzcController {
  @operation({
    summary: "Get Ezc",
  })
  @get()
  static getEzc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezc",
  })
  @post("{id}")
  static createEzc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
