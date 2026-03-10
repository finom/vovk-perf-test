import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jss")
export default class JssController {
  @operation({
    summary: "Get Jss",
  })
  @get()
  static getJss = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jss",
  })
  @post("{id}")
  static createJss = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
