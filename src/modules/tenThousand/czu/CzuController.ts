import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("czu")
export default class CzuController {
  @operation({
    summary: "Get Czu",
  })
  @get()
  static getCzu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czu",
  })
  @post("{id}")
  static createCzu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
