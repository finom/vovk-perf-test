import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cmj")
export default class CmjController {
  @operation({
    summary: "Get Cmj",
  })
  @get()
  static getCmj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cmj",
  })
  @post("{id}")
  static createCmj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
