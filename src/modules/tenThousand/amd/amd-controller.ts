import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("amd")
export default class AmdController {
  @operation({
    summary: "Get Amd",
  })
  @get()
  static getAmd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Amd",
  })
  @post("{id}")
  static createAmd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
