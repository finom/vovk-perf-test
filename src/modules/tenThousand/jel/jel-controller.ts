import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jel")
export default class JelController {
  @operation({
    summary: "Get Jel",
  })
  @get()
  static getJel = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jel",
  })
  @post("{id}")
  static createJel = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
