import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jtx")
export default class JtxController {
  @operation({
    summary: "Get Jtx",
  })
  @get()
  static getJtx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jtx",
  })
  @post("{id}")
  static createJtx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
