import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nae")
export default class NaeController {
  @operation({
    summary: "Get Nae",
  })
  @get()
  static getNae = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nae",
  })
  @post("{id}")
  static createNae = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
