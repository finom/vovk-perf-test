import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jth")
export default class JthController {
  @operation({
    summary: "Get Jth",
  })
  @get()
  static getJth = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jth",
  })
  @post("{id}")
  static createJth = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
