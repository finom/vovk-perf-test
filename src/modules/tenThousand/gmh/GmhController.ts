import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gmh")
export default class GmhController {
  @operation({
    summary: "Get Gmh",
  })
  @get()
  static getGmh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gmh",
  })
  @post("{id}")
  static createGmh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
