import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("uq")
export default class UqController {
  @operation({
    summary: "Get Uq",
  })
  @get()
  static getUq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Uq",
  })
  @post("{id}")
  static createUq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
