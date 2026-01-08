import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cyt")
export default class CytController {
  @operation({
    summary: "Get Cyt",
  })
  @get()
  static getCyt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cyt",
  })
  @post("{id}")
  static createCyt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
