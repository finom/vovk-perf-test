import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cpo")
export default class CpoController {
  @operation({
    summary: "Get Cpo",
  })
  @get()
  static getCpo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cpo",
  })
  @post("{id}")
  static createCpo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
