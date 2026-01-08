import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hvv")
export default class HvvController {
  @operation({
    summary: "Get Hvv",
  })
  @get()
  static getHvv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hvv",
  })
  @post("{id}")
  static createHvv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
