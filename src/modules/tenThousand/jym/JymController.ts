import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jym")
export default class JymController {
  @operation({
    summary: "Get Jym",
  })
  @get()
  static getJym = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jym",
  })
  @post("{id}")
  static createJym = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
