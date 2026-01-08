import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aov")
export default class AovController {
  @operation({
    summary: "Get Aov",
  })
  @get()
  static getAov = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aov",
  })
  @post("{id}")
  static createAov = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
