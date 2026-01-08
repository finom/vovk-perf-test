import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("heh")
export default class HehController {
  @operation({
    summary: "Get Heh",
  })
  @get()
  static getHeh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Heh",
  })
  @post("{id}")
  static createHeh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
