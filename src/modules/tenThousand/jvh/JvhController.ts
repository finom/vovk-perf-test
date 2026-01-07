import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvh")
export default class JvhController {
  @operation({
    summary: "Get Jvh",
  })
  @get()
  static getJvh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jvh",
  })
  @post("{id}")
  static createJvh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
