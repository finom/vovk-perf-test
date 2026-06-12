import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("khq")
export default class KhqController {
  @operation({
    summary: "Get Khq",
  })
  @get()
  static getKhq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Khq",
  })
  @post("{id}")
  static createKhq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
