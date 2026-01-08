import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("amv")
export default class AmvController {
  @operation({
    summary: "Get Amv",
  })
  @get()
  static getAmv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Amv",
  })
  @post("{id}")
  static createAmv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
