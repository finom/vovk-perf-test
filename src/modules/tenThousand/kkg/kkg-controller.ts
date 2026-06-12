import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kkg")
export default class KkgController {
  @operation({
    summary: "Get Kkg",
  })
  @get()
  static getKkg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kkg",
  })
  @post("{id}")
  static createKkg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
