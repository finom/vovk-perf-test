import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("vv")
export default class VvController {
  @operation({
    summary: "Get Vv",
  })
  @get()
  static getVv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Vv",
  })
  @post("{id}")
  static createVv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
