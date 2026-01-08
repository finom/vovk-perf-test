import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jir")
export default class JirController {
  @operation({
    summary: "Get Jir",
  })
  @get()
  static getJir = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jir",
  })
  @post("{id}")
  static createJir = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
