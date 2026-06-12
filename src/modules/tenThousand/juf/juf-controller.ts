import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("juf")
export default class JufController {
  @operation({
    summary: "Get Juf",
  })
  @get()
  static getJuf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Juf",
  })
  @post("{id}")
  static createJuf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
