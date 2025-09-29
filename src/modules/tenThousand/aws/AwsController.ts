import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aws")
export default class AwsController {
  @operation({
    summary: "Get Aws",
  })
  @get()
  static getAws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aws",
  })
  @post("{id}")
  static createAws = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
