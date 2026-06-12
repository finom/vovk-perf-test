import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ckh")
export default class CkhController {
  @operation({
    summary: "Get Ckh",
  })
  @get()
  static getCkh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ckh",
  })
  @post("{id}")
  static createCkh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
