import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hvk")
export default class HvkController {
  @operation({
    summary: "Get Hvk",
  })
  @get()
  static getHvk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hvk",
  })
  @post("{id}")
  static createHvk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
