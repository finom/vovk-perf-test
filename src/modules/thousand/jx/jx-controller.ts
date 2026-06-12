import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jx")
export default class JxController {
  @operation({
    summary: "Get Jx",
  })
  @get()
  static getJx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jx",
  })
  @post("{id}")
  static createJx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
