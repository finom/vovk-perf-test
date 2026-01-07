import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vk")
export default class VkController {
  @operation({
    summary: "Get Vk",
  })
  @get()
  static getVk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Vk",
  })
  @post("{id}")
  static createVk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
