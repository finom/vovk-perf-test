import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("edx")
export default class EdxController {
  @operation({
    summary: "Get Edx",
  })
  @get()
  static getEdx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Edx",
  })
  @post("{id}")
  static createEdx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
