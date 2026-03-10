import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ckm")
export default class CkmController {
  @operation({
    summary: "Get Ckm",
  })
  @get()
  static getCkm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ckm",
  })
  @post("{id}")
  static createCkm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
