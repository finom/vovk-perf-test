import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itk")
export default class ItkController {
  @operation({
    summary: "Get Itk",
  })
  @get()
  static getItk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Itk",
  })
  @post("{id}")
  static createItk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
