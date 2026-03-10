import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("juk")
export default class JukController {
  @operation({
    summary: "Get Juk",
  })
  @get()
  static getJuk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Juk",
  })
  @post("{id}")
  static createJuk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
