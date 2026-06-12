import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jbc")
export default class JbcController {
  @operation({
    summary: "Get Jbc",
  })
  @get()
  static getJbc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jbc",
  })
  @post("{id}")
  static createJbc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
