import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fkh")
export default class FkhController {
  @operation({
    summary: "Get Fkh",
  })
  @get()
  static getFkh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fkh",
  })
  @post("{id}")
  static createFkh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
