import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("khm")
export default class KhmController {
  @operation({
    summary: "Get Khm",
  })
  @get()
  static getKhm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Khm",
  })
  @post("{id}")
  static createKhm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
