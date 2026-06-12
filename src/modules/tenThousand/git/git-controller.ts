import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("git")
export default class GitController {
  @operation({
    summary: "Get Git",
  })
  @get()
  static getGit = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Git",
  })
  @post("{id}")
  static createGit = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
