import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("si")
export default class SiController {
  @operation({
    summary: "Get Si",
  })
  @get()
  static getSi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Si",
  })
  @post("{id}")
  static createSi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
