import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gcu")
export default class GcuController {
  @operation({
    summary: "Get Gcu",
  })
  @get()
  static getGcu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gcu",
  })
  @post("{id}")
  static createGcu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
