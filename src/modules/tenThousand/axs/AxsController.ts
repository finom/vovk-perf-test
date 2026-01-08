import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("axs")
export default class AxsController {
  @operation({
    summary: "Get Axs",
  })
  @get()
  static getAxs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axs",
  })
  @post("{id}")
  static createAxs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
