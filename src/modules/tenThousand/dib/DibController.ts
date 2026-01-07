import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dib")
export default class DibController {
  @operation({
    summary: "Get Dib",
  })
  @get()
  static getDib = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dib",
  })
  @post("{id}")
  static createDib = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
