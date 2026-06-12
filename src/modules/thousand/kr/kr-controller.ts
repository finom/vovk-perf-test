import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kr")
export default class KrController {
  @operation({
    summary: "Get Kr",
  })
  @get()
  static getKr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kr",
  })
  @post("{id}")
  static createKr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
