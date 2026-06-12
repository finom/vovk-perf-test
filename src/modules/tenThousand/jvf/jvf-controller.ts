import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jvf")
export default class JvfController {
  @operation({
    summary: "Get Jvf",
  })
  @get()
  static getJvf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jvf",
  })
  @post("{id}")
  static createJvf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
