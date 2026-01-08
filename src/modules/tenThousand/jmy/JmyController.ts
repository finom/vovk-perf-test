import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jmy")
export default class JmyController {
  @operation({
    summary: "Get Jmy",
  })
  @get()
  static getJmy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jmy",
  })
  @post("{id}")
  static createJmy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
