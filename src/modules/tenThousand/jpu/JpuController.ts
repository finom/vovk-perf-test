import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpu")
export default class JpuController {
  @operation({
    summary: "Get Jpu",
  })
  @get()
  static getJpu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jpu",
  })
  @post("{id}")
  static createJpu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
