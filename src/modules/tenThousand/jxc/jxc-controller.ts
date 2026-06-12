import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jxc")
export default class JxcController {
  @operation({
    summary: "Get Jxc",
  })
  @get()
  static getJxc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jxc",
  })
  @post("{id}")
  static createJxc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
