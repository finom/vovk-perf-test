import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nhv")
export default class NhvController {
  @operation({
    summary: "Get Nhv",
  })
  @get()
  static getNhv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nhv",
  })
  @post("{id}")
  static createNhv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
