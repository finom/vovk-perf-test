import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nhp")
export default class NhpController {
  @operation({
    summary: "Get Nhp",
  })
  @get()
  static getNhp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nhp",
  })
  @post("{id}")
  static createNhp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
