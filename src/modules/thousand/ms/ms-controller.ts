import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ms")
export default class MsController {
  @operation({
    summary: "Get Ms",
  })
  @get()
  static getMs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ms",
  })
  @post("{id}")
  static createMs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
