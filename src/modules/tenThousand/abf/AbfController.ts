import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("abf")
export default class AbfController {
  @operation({
    summary: "Get Abf",
  })
  @get()
  static getAbf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abf",
  })
  @post("{id}")
  static createAbf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
