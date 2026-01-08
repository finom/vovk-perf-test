import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("czp")
export default class CzpController {
  @operation({
    summary: "Get Czp",
  })
  @get()
  static getCzp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czp",
  })
  @post("{id}")
  static createCzp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
