import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jma")
export default class JmaController {
  @operation({
    summary: "Get Jma",
  })
  @get()
  static getJma = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jma",
  })
  @post("{id}")
  static createJma = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
