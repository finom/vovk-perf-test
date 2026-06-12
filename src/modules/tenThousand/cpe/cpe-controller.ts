import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cpe")
export default class CpeController {
  @operation({
    summary: "Get Cpe",
  })
  @get()
  static getCpe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cpe",
  })
  @post("{id}")
  static createCpe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
