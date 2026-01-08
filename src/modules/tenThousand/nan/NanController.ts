import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nan")
export default class NanController {
  @operation({
    summary: "Get Nan",
  })
  @get()
  static getNan = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nan",
  })
  @post("{id}")
  static createNan = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
