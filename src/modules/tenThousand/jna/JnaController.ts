import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jna")
export default class JnaController {
  @operation({
    summary: "Get Jna",
  })
  @get()
  static getJna = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jna",
  })
  @post("{id}")
  static createJna = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
