import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jtu")
export default class JtuController {
  @operation({
    summary: "Get Jtu",
  })
  @get()
  static getJtu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jtu",
  })
  @post("{id}")
  static createJtu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
