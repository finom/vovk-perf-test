import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("khw")
export default class KhwController {
  @operation({
    summary: "Get Khw",
  })
  @get()
  static getKhw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Khw",
  })
  @post("{id}")
  static createKhw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
