import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nhb")
export default class NhbController {
  @operation({
    summary: "Get Nhb",
  })
  @get()
  static getNhb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nhb",
  })
  @post("{id}")
  static createNhb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
