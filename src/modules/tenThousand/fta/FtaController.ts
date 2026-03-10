import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fta")
export default class FtaController {
  @operation({
    summary: "Get Fta",
  })
  @get()
  static getFta = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fta",
  })
  @post("{id}")
  static createFta = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
