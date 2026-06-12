import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jwy")
export default class JwyController {
  @operation({
    summary: "Get Jwy",
  })
  @get()
  static getJwy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jwy",
  })
  @post("{id}")
  static createJwy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
