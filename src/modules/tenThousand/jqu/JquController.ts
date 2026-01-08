import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jqu")
export default class JquController {
  @operation({
    summary: "Get Jqu",
  })
  @get()
  static getJqu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jqu",
  })
  @post("{id}")
  static createJqu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
