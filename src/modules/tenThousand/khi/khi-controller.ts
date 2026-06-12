import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("khi")
export default class KhiController {
  @operation({
    summary: "Get Khi",
  })
  @get()
  static getKhi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Khi",
  })
  @post("{id}")
  static createKhi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
