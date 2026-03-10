import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jzn")
export default class JznController {
  @operation({
    summary: "Get Jzn",
  })
  @get()
  static getJzn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jzn",
  })
  @post("{id}")
  static createJzn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
