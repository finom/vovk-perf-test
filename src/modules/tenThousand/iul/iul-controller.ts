import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iul")
export default class IulController {
  @operation({
    summary: "Get Iul",
  })
  @get()
  static getIul = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iul",
  })
  @post("{id}")
  static createIul = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
