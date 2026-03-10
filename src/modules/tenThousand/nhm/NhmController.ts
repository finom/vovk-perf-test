import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nhm")
export default class NhmController {
  @operation({
    summary: "Get Nhm",
  })
  @get()
  static getNhm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nhm",
  })
  @post("{id}")
  static createNhm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
