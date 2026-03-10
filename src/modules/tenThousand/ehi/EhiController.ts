import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ehi")
export default class EhiController {
  @operation({
    summary: "Get Ehi",
  })
  @get()
  static getEhi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ehi",
  })
  @post("{id}")
  static createEhi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
