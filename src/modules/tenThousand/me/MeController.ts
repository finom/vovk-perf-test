import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("me")
export default class MeController {
  @operation({
    summary: "Get Me",
  })
  @get()
  static getMe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Me",
  })
  @post("{id}")
  static createMe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
