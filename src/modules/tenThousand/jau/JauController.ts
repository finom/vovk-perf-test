import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jau")
export default class JauController {
  @operation({
    summary: "Get Jau",
  })
  @get()
  static getJau = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jau",
  })
  @post("{id}")
  static createJau = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
