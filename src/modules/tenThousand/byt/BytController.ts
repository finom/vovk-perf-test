import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("byt")
export default class BytController {
  @operation({
    summary: "Get Byt",
  })
  @get()
  static getByt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Byt",
  })
  @post("{id}")
  static createByt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
