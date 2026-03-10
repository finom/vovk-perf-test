import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ckx")
export default class CkxController {
  @operation({
    summary: "Get Ckx",
  })
  @get()
  static getCkx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ckx",
  })
  @post("{id}")
  static createCkx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
