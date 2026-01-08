import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("axm")
export default class AxmController {
  @operation({
    summary: "Get Axm",
  })
  @get()
  static getAxm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axm",
  })
  @post("{id}")
  static createAxm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
