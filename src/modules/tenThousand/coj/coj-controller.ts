import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("coj")
export default class CojController {
  @operation({
    summary: "Get Coj",
  })
  @get()
  static getCoj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Coj",
  })
  @post("{id}")
  static createCoj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
