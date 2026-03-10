import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cmo")
export default class CmoController {
  @operation({
    summary: "Get Cmo",
  })
  @get()
  static getCmo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cmo",
  })
  @post("{id}")
  static createCmo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
