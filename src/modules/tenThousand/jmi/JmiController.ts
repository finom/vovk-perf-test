import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jmi")
export default class JmiController {
  @operation({
    summary: "Get Jmi",
  })
  @get()
  static getJmi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jmi",
  })
  @post("{id}")
  static createJmi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
