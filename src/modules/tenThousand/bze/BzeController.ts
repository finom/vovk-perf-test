import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bze")
export default class BzeController {
  @operation({
    summary: "Get Bze",
  })
  @get()
  static getBze = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bze",
  })
  @post("{id}")
  static createBze = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
