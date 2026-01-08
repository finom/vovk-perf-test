import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("avd")
export default class AvdController {
  @operation({
    summary: "Get Avd",
  })
  @get()
  static getAvd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avd",
  })
  @post("{id}")
  static createAvd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
