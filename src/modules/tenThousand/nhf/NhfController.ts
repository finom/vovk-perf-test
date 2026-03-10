import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nhf")
export default class NhfController {
  @operation({
    summary: "Get Nhf",
  })
  @get()
  static getNhf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nhf",
  })
  @post("{id}")
  static createNhf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
