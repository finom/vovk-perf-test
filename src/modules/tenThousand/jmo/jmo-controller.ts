import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jmo")
export default class JmoController {
  @operation({
    summary: "Get Jmo",
  })
  @get()
  static getJmo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jmo",
  })
  @post("{id}")
  static createJmo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
