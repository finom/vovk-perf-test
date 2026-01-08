import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ggs")
export default class GgsController {
  @operation({
    summary: "Get Ggs",
  })
  @get()
  static getGgs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggs",
  })
  @post("{id}")
  static createGgs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
