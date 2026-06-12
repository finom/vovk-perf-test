import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ghl")
export default class GhlController {
  @operation({
    summary: "Get Ghl",
  })
  @get()
  static getGhl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ghl",
  })
  @post("{id}")
  static createGhl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
