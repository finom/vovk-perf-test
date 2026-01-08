import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("axd")
export default class AxdController {
  @operation({
    summary: "Get Axd",
  })
  @get()
  static getAxd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axd",
  })
  @post("{id}")
  static createAxd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
