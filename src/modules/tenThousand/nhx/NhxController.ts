import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nhx")
export default class NhxController {
  @operation({
    summary: "Get Nhx",
  })
  @get()
  static getNhx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nhx",
  })
  @post("{id}")
  static createNhx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
