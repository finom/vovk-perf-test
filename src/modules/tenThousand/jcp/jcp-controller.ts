import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jcp")
export default class JcpController {
  @operation({
    summary: "Get Jcp",
  })
  @get()
  static getJcp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jcp",
  })
  @post("{id}")
  static createJcp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
