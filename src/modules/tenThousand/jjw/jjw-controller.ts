import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jjw")
export default class JjwController {
  @operation({
    summary: "Get Jjw",
  })
  @get()
  static getJjw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jjw",
  })
  @post("{id}")
  static createJjw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
