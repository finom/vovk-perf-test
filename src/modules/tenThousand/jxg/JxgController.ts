import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jxg")
export default class JxgController {
  @operation({
    summary: "Get Jxg",
  })
  @get()
  static getJxg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jxg",
  })
  @post("{id}")
  static createJxg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
