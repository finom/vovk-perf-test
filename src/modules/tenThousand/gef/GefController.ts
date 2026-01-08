import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gef")
export default class GefController {
  @operation({
    summary: "Get Gef",
  })
  @get()
  static getGef = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gef",
  })
  @post("{id}")
  static createGef = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
