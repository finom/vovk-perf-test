import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("uu")
export default class UuController {
  @operation({
    summary: "Get Uu",
  })
  @get()
  static getUu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Uu",
  })
  @post("{id}")
  static createUu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
