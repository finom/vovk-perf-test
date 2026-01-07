import { procedure, prefix, get, post, operation } from "vovk";

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
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
