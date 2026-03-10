import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ckr")
export default class CkrController {
  @operation({
    summary: "Get Ckr",
  })
  @get()
  static getCkr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ckr",
  })
  @post("{id}")
  static createCkr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
