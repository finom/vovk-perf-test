import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hem")
export default class HemController {
  @operation({
    summary: "Get Hem",
  })
  @get()
  static getHem = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hem",
  })
  @post("{id}")
  static createHem = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
