import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jtp")
export default class JtpController {
  @operation({
    summary: "Get Jtp",
  })
  @get()
  static getJtp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jtp",
  })
  @post("{id}")
  static createJtp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
