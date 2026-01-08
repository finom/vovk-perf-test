import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jfz")
export default class JfzController {
  @operation({
    summary: "Get Jfz",
  })
  @get()
  static getJfz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfz",
  })
  @post("{id}")
  static createJfz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
