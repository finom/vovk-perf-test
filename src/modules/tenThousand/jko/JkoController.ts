import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jko")
export default class JkoController {
  @operation({
    summary: "Get Jko",
  })
  @get()
  static getJko = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jko",
  })
  @post("{id}")
  static createJko = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
