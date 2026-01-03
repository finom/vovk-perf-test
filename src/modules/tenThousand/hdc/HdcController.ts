import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdcs")
export default class HdcController {
  @operation({
    summary: "Get Hdcs",
  })
  @get()
  static getHdcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hdc",
  })
  @post("{id}")
  static createHdc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
