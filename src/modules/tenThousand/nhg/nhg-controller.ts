import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nhg")
export default class NhgController {
  @operation({
    summary: "Get Nhg",
  })
  @get()
  static getNhg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nhg",
  })
  @post("{id}")
  static createNhg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
