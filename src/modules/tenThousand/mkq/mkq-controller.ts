import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mkq")
export default class MkqController {
  @operation({
    summary: "Get Mkq",
  })
  @get()
  static getMkq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mkq",
  })
  @post("{id}")
  static createMkq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
