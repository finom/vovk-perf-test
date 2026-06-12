import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mkv")
export default class MkvController {
  @operation({
    summary: "Get Mkv",
  })
  @get()
  static getMkv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mkv",
  })
  @post("{id}")
  static createMkv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
