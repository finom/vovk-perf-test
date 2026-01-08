import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("xn")
export default class XnController {
  @operation({
    summary: "Get Xn",
  })
  @get()
  static getXn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xn",
  })
  @post("{id}")
  static createXn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
