import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("epo")
export default class EpoController {
  @operation({
    summary: "Get Epo",
  })
  @get()
  static getEpo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Epo",
  })
  @post("{id}")
  static createEpo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
