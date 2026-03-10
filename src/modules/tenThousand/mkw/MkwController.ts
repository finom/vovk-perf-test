import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mkw")
export default class MkwController {
  @operation({
    summary: "Get Mkw",
  })
  @get()
  static getMkw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mkw",
  })
  @post("{id}")
  static createMkw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
