import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ert")
export default class ErtController {
  @operation({
    summary: "Get Ert",
  })
  @get()
  static getErt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ert",
  })
  @post("{id}")
  static createErt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
