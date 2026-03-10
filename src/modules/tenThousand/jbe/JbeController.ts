import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jbe")
export default class JbeController {
  @operation({
    summary: "Get Jbe",
  })
  @get()
  static getJbe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jbe",
  })
  @post("{id}")
  static createJbe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
