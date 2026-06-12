import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jiu")
export default class JiuController {
  @operation({
    summary: "Get Jiu",
  })
  @get()
  static getJiu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jiu",
  })
  @post("{id}")
  static createJiu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
