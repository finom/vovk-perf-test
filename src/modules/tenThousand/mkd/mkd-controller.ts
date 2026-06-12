import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mkd")
export default class MkdController {
  @operation({
    summary: "Get Mkd",
  })
  @get()
  static getMkd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mkd",
  })
  @post("{id}")
  static createMkd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
