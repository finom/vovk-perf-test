import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("vk")
export default class VkController {
  @operation({
    summary: "Get Vk",
  })
  @get()
  static getVk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Vk",
  })
  @post("{id}")
  static createVk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
