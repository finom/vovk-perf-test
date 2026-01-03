import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dds")
export default class DdsController {
  @operation({
    summary: "Get Dds",
  })
  @get()
  static getDds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dds",
  })
  @post("{id}")
  static createDds = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
