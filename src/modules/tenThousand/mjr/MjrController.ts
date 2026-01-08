import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mjr")
export default class MjrController {
  @operation({
    summary: "Get Mjr",
  })
  @get()
  static getMjr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mjr",
  })
  @post("{id}")
  static createMjr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
