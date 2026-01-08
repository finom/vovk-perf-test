import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("amj")
export default class AmjController {
  @operation({
    summary: "Get Amj",
  })
  @get()
  static getAmj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Amj",
  })
  @post("{id}")
  static createAmj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
