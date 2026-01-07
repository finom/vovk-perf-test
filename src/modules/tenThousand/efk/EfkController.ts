import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efk")
export default class EfkController {
  @operation({
    summary: "Get Efk",
  })
  @get()
  static getEfk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Efk",
  })
  @post("{id}")
  static createEfk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
