import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hpb")
export default class HpbController {
  @operation({
    summary: "Get Hpb",
  })
  @get()
  static getHpb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hpb",
  })
  @post("{id}")
  static createHpb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
