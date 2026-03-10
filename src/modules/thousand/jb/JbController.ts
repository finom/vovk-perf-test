import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jb")
export default class JbController {
  @operation({
    summary: "Get Jb",
  })
  @get()
  static getJb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jb",
  })
  @post("{id}")
  static createJb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
