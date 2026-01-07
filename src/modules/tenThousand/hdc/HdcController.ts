import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdc")
export default class HdcController {
  @operation({
    summary: "Get Hdc",
  })
  @get()
  static getHdc = procedure({
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
