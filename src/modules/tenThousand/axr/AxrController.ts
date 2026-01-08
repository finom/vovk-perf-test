import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("axr")
export default class AxrController {
  @operation({
    summary: "Get Axr",
  })
  @get()
  static getAxr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axr",
  })
  @post("{id}")
  static createAxr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
