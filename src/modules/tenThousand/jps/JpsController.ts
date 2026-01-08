import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jps")
export default class JpsController {
  @operation({
    summary: "Get Jps",
  })
  @get()
  static getJps = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jps",
  })
  @post("{id}")
  static createJps = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
