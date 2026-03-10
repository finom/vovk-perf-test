import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jzv")
export default class JzvController {
  @operation({
    summary: "Get Jzv",
  })
  @get()
  static getJzv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jzv",
  })
  @post("{id}")
  static createJzv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
