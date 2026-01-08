import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("for")
export default class ForController {
  @operation({
    summary: "Get For",
  })
  @get()
  static getFor = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create For",
  })
  @post("{id}")
  static createFor = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
