import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkv")
export default class MkvController {
  @operation({
    summary: "Get Mkv",
  })
  @get()
  static getMkv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mkv",
  })
  @post("{id}")
  static createMkv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
