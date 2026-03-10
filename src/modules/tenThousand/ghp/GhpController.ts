import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ghp")
export default class GhpController {
  @operation({
    summary: "Get Ghp",
  })
  @get()
  static getGhp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ghp",
  })
  @post("{id}")
  static createGhp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
