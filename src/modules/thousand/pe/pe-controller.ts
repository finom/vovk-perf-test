import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("pe")
export default class PeController {
  @operation({
    summary: "Get Pe",
  })
  @get()
  static getPe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Pe",
  })
  @post("{id}")
  static createPe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
