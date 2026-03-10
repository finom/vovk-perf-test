import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jvy")
export default class JvyController {
  @operation({
    summary: "Get Jvy",
  })
  @get()
  static getJvy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jvy",
  })
  @post("{id}")
  static createJvy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
