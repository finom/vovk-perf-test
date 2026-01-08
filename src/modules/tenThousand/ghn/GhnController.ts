import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ghn")
export default class GhnController {
  @operation({
    summary: "Get Ghn",
  })
  @get()
  static getGhn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ghn",
  })
  @post("{id}")
  static createGhn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
