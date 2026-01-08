import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("oj")
export default class OjController {
  @operation({
    summary: "Get Oj",
  })
  @get()
  static getOj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Oj",
  })
  @post("{id}")
  static createOj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
