import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fkd")
export default class FkdController {
  @operation({
    summary: "Get Fkd",
  })
  @get()
  static getFkd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fkd",
  })
  @post("{id}")
  static createFkd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
