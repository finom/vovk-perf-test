import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jkt")
export default class JktController {
  @operation({
    summary: "Get Jkt",
  })
  @get()
  static getJkt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jkt",
  })
  @post("{id}")
  static createJkt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
