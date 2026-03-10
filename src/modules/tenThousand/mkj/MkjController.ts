import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mkj")
export default class MkjController {
  @operation({
    summary: "Get Mkj",
  })
  @get()
  static getMkj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mkj",
  })
  @post("{id}")
  static createMkj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
