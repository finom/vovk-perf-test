import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jqi")
export default class JqiController {
  @operation({
    summary: "Get Jqi",
  })
  @get()
  static getJqi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jqi",
  })
  @post("{id}")
  static createJqi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
