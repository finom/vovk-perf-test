import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("vks")
export default class VkController {
  @operation({
    summary: "Get Vks",
  })
  @get()
  static getVks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Vk",
  })
  @post("{id}")
  static createVk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
