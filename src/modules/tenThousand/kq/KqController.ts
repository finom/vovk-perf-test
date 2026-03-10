import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kq")
export default class KqController {
  @operation({
    summary: "Get Kq",
  })
  @get()
  static getKq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kq",
  })
  @post("{id}")
  static createKq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
