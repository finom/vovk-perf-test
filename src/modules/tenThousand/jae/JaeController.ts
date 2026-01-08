import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jae")
export default class JaeController {
  @operation({
    summary: "Get Jae",
  })
  @get()
  static getJae = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jae",
  })
  @post("{id}")
  static createJae = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
