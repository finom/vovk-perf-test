import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("int")
export default class IntController {
  @operation({
    summary: "Get Int",
  })
  @get()
  static getInt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Int",
  })
  @post("{id}")
  static createInt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
