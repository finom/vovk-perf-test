import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jaz")
export default class JazController {
  @operation({
    summary: "Get Jaz",
  })
  @get()
  static getJaz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jaz",
  })
  @post("{id}")
  static createJaz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
