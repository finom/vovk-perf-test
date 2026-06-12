import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jgg")
export default class JggController {
  @operation({
    summary: "Get Jgg",
  })
  @get()
  static getJgg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jgg",
  })
  @post("{id}")
  static createJgg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
