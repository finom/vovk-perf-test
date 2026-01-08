import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cik")
export default class CikController {
  @operation({
    summary: "Get Cik",
  })
  @get()
  static getCik = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cik",
  })
  @post("{id}")
  static createCik = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
