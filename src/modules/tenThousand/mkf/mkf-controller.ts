import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mkf")
export default class MkfController {
  @operation({
    summary: "Get Mkf",
  })
  @get()
  static getMkf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mkf",
  })
  @post("{id}")
  static createMkf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
