import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kql")
export default class KqlController {
  @operation({
    summary: "Get Kql",
  })
  @get()
  static getKql = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kql",
  })
  @post("{id}")
  static createKql = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
