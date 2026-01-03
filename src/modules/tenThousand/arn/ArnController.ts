import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arns")
export default class ArnController {
  @operation({
    summary: "Get Arns",
  })
  @get()
  static getArns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Arn",
  })
  @post("{id}")
  static createArn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
