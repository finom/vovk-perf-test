import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jux")
export default class JuxController {
  @operation({
    summary: "Get Jux",
  })
  @get()
  static getJux = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jux",
  })
  @post("{id}")
  static createJux = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
