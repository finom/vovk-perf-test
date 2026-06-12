import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jrj")
export default class JrjController {
  @operation({
    summary: "Get Jrj",
  })
  @get()
  static getJrj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jrj",
  })
  @post("{id}")
  static createJrj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
