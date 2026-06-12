import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nsu")
export default class NsuController {
  @operation({
    summary: "Get Nsu",
  })
  @get()
  static getNsu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nsu",
  })
  @post("{id}")
  static createNsu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
