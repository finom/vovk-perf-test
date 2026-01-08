import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("han")
export default class HanController {
  @operation({
    summary: "Get Han",
  })
  @get()
  static getHan = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Han",
  })
  @post("{id}")
  static createHan = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
