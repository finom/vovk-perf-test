import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fkq")
export default class FkqController {
  @operation({
    summary: "Get Fkq",
  })
  @get()
  static getFkq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fkq",
  })
  @post("{id}")
  static createFkq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
