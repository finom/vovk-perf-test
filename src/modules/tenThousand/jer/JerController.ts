import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jer")
export default class JerController {
  @operation({
    summary: "Get Jer",
  })
  @get()
  static getJer = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jer",
  })
  @post("{id}")
  static createJer = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
