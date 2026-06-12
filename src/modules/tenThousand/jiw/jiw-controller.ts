import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jiw")
export default class JiwController {
  @operation({
    summary: "Get Jiw",
  })
  @get()
  static getJiw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jiw",
  })
  @post("{id}")
  static createJiw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
