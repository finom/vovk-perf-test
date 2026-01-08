import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("pi")
export default class PiController {
  @operation({
    summary: "Get Pi",
  })
  @get()
  static getPi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Pi",
  })
  @post("{id}")
  static createPi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
