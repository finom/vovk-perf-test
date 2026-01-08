import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mjj")
export default class MjjController {
  @operation({
    summary: "Get Mjj",
  })
  @get()
  static getMjj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mjj",
  })
  @post("{id}")
  static createMjj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
