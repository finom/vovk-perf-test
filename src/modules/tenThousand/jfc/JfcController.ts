import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jfc")
export default class JfcController {
  @operation({
    summary: "Get Jfc",
  })
  @get()
  static getJfc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jfc",
  })
  @post("{id}")
  static createJfc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
