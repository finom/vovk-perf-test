import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("agl")
export default class AglController {
  @operation({
    summary: "Get Agl",
  })
  @get()
  static getAgl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Agl",
  })
  @post("{id}")
  static createAgl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
