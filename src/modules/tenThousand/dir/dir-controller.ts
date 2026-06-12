import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dir")
export default class DirController {
  @operation({
    summary: "Get Dir",
  })
  @get()
  static getDir = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dir",
  })
  @post("{id}")
  static createDir = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
