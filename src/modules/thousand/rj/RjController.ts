import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("rj")
export default class RjController {
  @operation({
    summary: "Get Rj",
  })
  @get()
  static getRj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Rj",
  })
  @post("{id}")
  static createRj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
