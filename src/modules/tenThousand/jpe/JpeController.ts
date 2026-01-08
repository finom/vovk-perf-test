import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jpe")
export default class JpeController {
  @operation({
    summary: "Get Jpe",
  })
  @get()
  static getJpe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpe",
  })
  @post("{id}")
  static createJpe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
