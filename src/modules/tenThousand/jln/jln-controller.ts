import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jln")
export default class JlnController {
  @operation({
    summary: "Get Jln",
  })
  @get()
  static getJln = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jln",
  })
  @post("{id}")
  static createJln = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
