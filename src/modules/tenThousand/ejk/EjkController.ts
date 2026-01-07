import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejk")
export default class EjkController {
  @operation({
    summary: "Get Ejk",
  })
  @get()
  static getEjk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ejk",
  })
  @post("{id}")
  static createEjk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
