import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gigs")
export default class GigController {
  @operation({
    summary: "Get Gigs",
  })
  @get()
  static getGigs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gig",
  })
  @post("{id}")
  static createGig = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
