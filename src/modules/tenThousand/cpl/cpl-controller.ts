import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cpl")
export default class CplController {
  @operation({
    summary: "Get Cpl",
  })
  @get()
  static getCpl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cpl",
  })
  @post("{id}")
  static createCpl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
