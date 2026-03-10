import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("khv")
export default class KhvController {
  @operation({
    summary: "Get Khv",
  })
  @get()
  static getKhv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Khv",
  })
  @post("{id}")
  static createKhv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
