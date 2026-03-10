import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jvj")
export default class JvjController {
  @operation({
    summary: "Get Jvj",
  })
  @get()
  static getJvj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jvj",
  })
  @post("{id}")
  static createJvj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
