import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irk")
export default class IrkController {
  @operation({
    summary: "Get Irk",
  })
  @get()
  static getIrk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Irk",
  })
  @post("{id}")
  static createIrk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
