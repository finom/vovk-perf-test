import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gsx")
export default class GsxController {
  @operation({
    summary: "Get Gsx",
  })
  @get()
  static getGsx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gsx",
  })
  @post("{id}")
  static createGsx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
