import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ciu")
export default class CiuController {
  @operation({
    summary: "Get Ciu",
  })
  @get()
  static getCiu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ciu",
  })
  @post("{id}")
  static createCiu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
