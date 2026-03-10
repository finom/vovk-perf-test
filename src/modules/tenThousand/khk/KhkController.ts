import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("khk")
export default class KhkController {
  @operation({
    summary: "Get Khk",
  })
  @get()
  static getKhk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Khk",
  })
  @post("{id}")
  static createKhk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
