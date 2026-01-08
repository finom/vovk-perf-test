import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ahk")
export default class AhkController {
  @operation({
    summary: "Get Ahk",
  })
  @get()
  static getAhk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ahk",
  })
  @post("{id}")
  static createAhk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
