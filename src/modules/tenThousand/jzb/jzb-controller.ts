import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jzb")
export default class JzbController {
  @operation({
    summary: "Get Jzb",
  })
  @get()
  static getJzb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jzb",
  })
  @post("{id}")
  static createJzb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
