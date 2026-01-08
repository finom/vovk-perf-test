import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("axk")
export default class AxkController {
  @operation({
    summary: "Get Axk",
  })
  @get()
  static getAxk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axk",
  })
  @post("{id}")
  static createAxk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
