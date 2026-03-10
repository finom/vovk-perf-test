import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nhz")
export default class NhzController {
  @operation({
    summary: "Get Nhz",
  })
  @get()
  static getNhz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nhz",
  })
  @post("{id}")
  static createNhz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
