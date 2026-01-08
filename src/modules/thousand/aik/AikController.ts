import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aik")
export default class AikController {
  @operation({
    summary: "Get Aik",
  })
  @get()
  static getAik = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aik",
  })
  @post("{id}")
  static createAik = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
