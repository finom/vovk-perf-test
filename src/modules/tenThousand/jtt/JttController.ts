import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jtt")
export default class JttController {
  @operation({
    summary: "Get Jtt",
  })
  @get()
  static getJtt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jtt",
  })
  @post("{id}")
  static createJtt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
