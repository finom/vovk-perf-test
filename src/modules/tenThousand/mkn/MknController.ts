import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkn")
export default class MknController {
  @operation({
    summary: "Get Mkn",
  })
  @get()
  static getMkn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mkn",
  })
  @post("{id}")
  static createMkn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
