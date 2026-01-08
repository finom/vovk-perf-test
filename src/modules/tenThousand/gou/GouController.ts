import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gou")
export default class GouController {
  @operation({
    summary: "Get Gou",
  })
  @get()
  static getGou = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gou",
  })
  @post("{id}")
  static createGou = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
