import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jjl")
export default class JjlController {
  @operation({
    summary: "Get Jjl",
  })
  @get()
  static getJjl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jjl",
  })
  @post("{id}")
  static createJjl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
