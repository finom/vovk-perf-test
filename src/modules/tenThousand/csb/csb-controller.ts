import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("csb")
export default class CsbController {
  @operation({
    summary: "Get Csb",
  })
  @get()
  static getCsb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Csb",
  })
  @post("{id}")
  static createCsb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
