import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("khb")
export default class KhbController {
  @operation({
    summary: "Get Khb",
  })
  @get()
  static getKhb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Khb",
  })
  @post("{id}")
  static createKhb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
