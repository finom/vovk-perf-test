import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ivk")
export default class IvkController {
  @operation({
    summary: "Get Ivk",
  })
  @get()
  static getIvk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ivk",
  })
  @post("{id}")
  static createIvk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
