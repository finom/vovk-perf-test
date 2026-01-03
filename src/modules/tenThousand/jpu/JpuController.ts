import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpus")
export default class JpuController {
  @operation({
    summary: "Get Jpus",
  })
  @get()
  static getJpus = procedure({
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
