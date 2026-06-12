import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jtr")
export default class JtrController {
  @operation({
    summary: "Get Jtr",
  })
  @get()
  static getJtr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jtr",
  })
  @post("{id}")
  static createJtr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
