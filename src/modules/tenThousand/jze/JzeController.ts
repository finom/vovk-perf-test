import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jze")
export default class JzeController {
  @operation({
    summary: "Get Jze",
  })
  @get()
  static getJze = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jze",
  })
  @post("{id}")
  static createJze = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
