import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aws")
export default class AwsController {
  @operation({
    summary: "Get Aws",
  })
  @get()
  static getAws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aws",
  })
  @post("{id}")
  static createAws = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
