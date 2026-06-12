import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ckj")
export default class CkjController {
  @operation({
    summary: "Get Ckj",
  })
  @get()
  static getCkj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ckj",
  })
  @post("{id}")
  static createCkj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
