import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nhq")
export default class NhqController {
  @operation({
    summary: "Get Nhq",
  })
  @get()
  static getNhq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nhq",
  })
  @post("{id}")
  static createNhq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
