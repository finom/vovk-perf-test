import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("od")
export default class OdController {
  @operation({
    summary: "Get Od",
  })
  @get()
  static getOd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Od",
  })
  @post("{id}")
  static createOd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
