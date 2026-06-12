import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jdo")
export default class JdoController {
  @operation({
    summary: "Get Jdo",
  })
  @get()
  static getJdo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jdo",
  })
  @post("{id}")
  static createJdo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
