import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ckq")
export default class CkqController {
  @operation({
    summary: "Get Ckq",
  })
  @get()
  static getCkq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ckq",
  })
  @post("{id}")
  static createCkq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
