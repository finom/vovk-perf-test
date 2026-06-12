import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jtc")
export default class JtcController {
  @operation({
    summary: "Get Jtc",
  })
  @get()
  static getJtc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jtc",
  })
  @post("{id}")
  static createJtc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
