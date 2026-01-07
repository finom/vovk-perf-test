import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhx")
export default class DhxController {
  @operation({
    summary: "Get Dhx",
  })
  @get()
  static getDhx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dhx",
  })
  @post("{id}")
  static createDhx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
