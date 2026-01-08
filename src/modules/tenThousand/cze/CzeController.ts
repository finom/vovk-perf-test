import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cze")
export default class CzeController {
  @operation({
    summary: "Get Cze",
  })
  @get()
  static getCze = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cze",
  })
  @post("{id}")
  static createCze = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
